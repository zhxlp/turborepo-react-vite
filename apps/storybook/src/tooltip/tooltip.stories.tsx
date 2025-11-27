import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "@repo/tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "提示文本",
    children: <button>按钮</button>,
  },
};
