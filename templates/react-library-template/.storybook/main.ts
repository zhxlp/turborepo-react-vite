import type { StorybookConfig } from "@storybook/react-vite";
import baseConfig from "@repo/storybook-config/preset";

const config: StorybookConfig = {
  ...baseConfig,
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
