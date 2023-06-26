import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textfield.tsx'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'password', 'search'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    label: 'Input',
  },
}

export const PasswordTextField: Story = {
  args: {
    variant: 'password',
    label: 'Password',
  },
}

export const SearchTextField: Story = {
  args: {
    variant: 'search',
  },
}

export const TextFieldWithError: Story = {
  args: {
    error: 'error',
  },
}

export const DisabledTextField: Story = {
  args: {
    disabled: true,
  },
}
