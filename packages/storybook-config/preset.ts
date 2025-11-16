import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  async viteFinal(config, { configType }) {
    // 确保正确解析 monorepo 依赖
    return {
      ...config,
      define: {
        ...config.define,
        "process.env": {},
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          // 添加 monorepo 包别名解析
          "@repo/react-library-template": path.resolve(
            "../../templates/react-library-template/src",
          ),
        },
        dedupe: ["react", "react-dom", "styled-components"],
      },
    };
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
