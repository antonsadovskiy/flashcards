import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../checkbox'

import { RadioGroup } from './radio-group.tsx'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {}
