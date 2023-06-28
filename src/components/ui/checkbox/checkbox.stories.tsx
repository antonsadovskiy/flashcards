import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckedCheckbox: Story = {
  args: {
    checked: true,
  },
}
export const UncheckedCheckbox: Story = {
  args: {
    checked: false,
  },
}
export const CheckedCheckboxWithLabel: Story = {
  args: {
    checked: true,
    label: 'checked',
  },
}
export const DisabledCheckedCheckboxWithLabel: Story = {
  args: {
    checked: true,
    label: 'disabled checked',
    disabled: true,
  },
}
export const UncheckedCheckboxWithLabel: Story = {
  args: {
    checked: false,
    label: 'unchecked',
  },
}
export const DisabledUncheckedCheckboxWithLabel: Story = {
  args: {
    checked: false,
    label: 'disabled unchecked',
    disabled: true,
  },
}
