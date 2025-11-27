import react from "@vitejs/plugin-react";
import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import sassDts from "vite-plugin-sass-dts";
import svgr from "vite-plugin-svgr";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const globalDeclarations = `
// Global type declarations
declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;

  export default ReactComponent;
}
`;

// https://vite.dev/config/
export const config = defineConfig({
  plugins: [
    react(),
    sassDts(),
    svgr(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src", "src/vite-env.d.ts"],
      exclude: ["src/**/*.test.ts", "src/**/*.stories.ts"],
      afterBuild() {
        const globalDtsPath = path.resolve("dist/global.d.ts");
        const mainDtsPath = path.resolve("dist/index.d.ts");
        if (existsSync(mainDtsPath)) {
          const originalContent = readFileSync(mainDtsPath, "utf-8");
          const newContent = `/// <reference path="./global.d.ts" />\n\n${originalContent}`;
          writeFileSync(globalDtsPath, globalDeclarations);
          writeFileSync(mainDtsPath, newContent);
        } else {
          console.log("❌ index.d.ts not found");
        }
      },
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => {
        if (format === "es") return "index.mjs";
        if (format === "cjs") return "index.js";
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});
