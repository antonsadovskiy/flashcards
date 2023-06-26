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
export const CheckboxWithLabel: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}
export const DisabledCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
export const DisabledCheckboxWithLabel: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Check-box',
  },
}
