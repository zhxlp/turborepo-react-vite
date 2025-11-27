import type { StorybookConfig } from "@storybook/react-vite";
import sassDts from "vite-plugin-sass-dts";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: (config) => {
    config.plugins?.push(sassDts());
    return config;
  },
};
export default config;
