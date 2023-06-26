import type { Meta, StoryObj } from '@storybook/react'

import { LogoutIcon } from '../icons/logout-icon'
import { Typography } from '../typography'

import { Button } from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: (
      <Typography variant={'subtitle2'} color={'light'}>
        Button primary
      </Typography>
    ),
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <Typography variant={'subtitle2'} color={'light'}>
        Button secondary
      </Typography>
    ),
    disabled: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: (
      <Typography variant={'subtitle2'} color={'accent'}>
        Button tertiary
      </Typography>
    ),
    disabled: false,
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: (
      <Typography variant={'subtitle1'} color={'accent'}>
        Button tertiary
      </Typography>
    ),
    disabled: false,
  },
}

export const WithIcon: Story = {
  render: () => (
    <Button>
      <LogoutIcon />
      <Typography variant={'subtitle2'} color={'light'}>
        Button primary
      </Typography>
    </Button>
  ),
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: (
      <Typography variant={'subtitle2'} color={'light'}>
        Full Width Button
      </Typography>
    ),
    disabled: false,
    fullWidth: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: 'link',
    children: (
      <Typography variant={'subtitle1'} color={'accent'}>
        Link that looks like a button
      </Typography>
    ),
    as: 'a',
    href: 'https://www.google.com',
  },
}
