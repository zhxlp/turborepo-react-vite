import type { Preview } from "@storybook/react-vite";
import basePreview from "@repo/storybook-config/base-preview";

const preview: Preview = {
  ...basePreview,
  parameters: {
    ...basePreview.parameters,
    // 覆盖或添加核心库特定的参数
  },
};

export default preview;
