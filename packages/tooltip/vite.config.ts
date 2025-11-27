import { mergeConfig } from "vite";
import { config as baseConfig } from "@repo/vite-config/react-library";

// https://vite.dev/config/
export default mergeConfig(baseConfig, {
  build: {
    entry: "src/index.ts",
  },
});
