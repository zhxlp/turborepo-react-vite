import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyButton } from "@repo/react-library-template";
import { fn } from "storybook/test";

const meta = {
  title: "Components/MyButton",
  component: MyButton,
  args: {
    label: "MyButton",
    onClick: fn(),
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
