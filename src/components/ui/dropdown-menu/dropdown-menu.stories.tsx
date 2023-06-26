import { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from './dropdown-menu.tsx'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropDownMenu,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuExample: Story = {}
