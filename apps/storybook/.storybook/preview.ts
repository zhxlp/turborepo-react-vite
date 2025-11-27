import type { Preview } from "@storybook/react-vite";
import "./preview.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    options: {
      storySort: {
        order: ["Components", "Utilities"],
      },
    },
    chromatic: { disable: true },
    docs: {
      codePanel: true,
    },
  },
};

export default preview;
