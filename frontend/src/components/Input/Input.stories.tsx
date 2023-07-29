import { Input } from "./Input";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
    args: {
        id: "login",
        label: "login",
        type: "text"
    },
};