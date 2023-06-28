import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { EyeOpenIcon } from '../icons/eye-close-icon'
import { EyeCloseIcon } from '../icons/eye-open-icon'
import { SearchIcon } from '../icons/search-icon'

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
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    label: 'Input',
    disabled: true,
  },
}

export const PasswordTextField: Story = {
  render: args => {
    const [show, setShow] = useState(false)

    return (
      <TextField
        {...args}
        variant={show ? 'default' : 'password'}
        iconEnd={
          show ? (
            <EyeOpenIcon onClick={() => setShow(!show)} />
          ) : (
            <EyeCloseIcon onClick={() => setShow(!show)} />
          )
        }
      />
    )
  },
}

export const SearchTextField: Story = {
  args: {
    variant: 'search',
    iconStart: <SearchIcon />,
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
