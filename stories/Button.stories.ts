import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "@/components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: "dark",
    label: "Button",
  },
};

export const DarkOutlined: Story = {
  args: {
    variant: "dark",
    outlined: true,
    label: "Button",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
    label: "Button",
  },
};

export const GreenOutlined: Story = {
  args: {
    variant: "green",
    outlined: true,
    label: "Button",
  },
};
