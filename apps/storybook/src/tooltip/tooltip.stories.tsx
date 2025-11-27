import { Tooltip } from "@repo/tooltip";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { generateComponentDescription } from "../utils";

const ComponentName = "Tooltip";
const ComponentPackageName = "@repo/tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: generateComponentDescription({
          componentName: ComponentName,
          componentPackageName: ComponentPackageName,
        }),
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "提示文本",
    children: <button>按钮</button>,
  },
};
