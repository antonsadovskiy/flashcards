import { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './sign-up.tsx'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
