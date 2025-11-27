import { MyCounter } from "@repo/react-library-template";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { generateComponentDescription } from "../utils";

const ComponentName = "MyCounter";
const ComponentPackageName = "@repo/react-library-template";

const meta = {
  title: "Components/MyCounter",
  component: MyCounter,
  args: {
    initialValue: 0,
    step: 1,
  },
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
} satisfies Meta<typeof MyCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMinMax: Story = {
  args: {
    min: 0,
    max: 10,
  },
};

export const CustomStep: Story = {
  args: {
    step: 5,
  },
};
