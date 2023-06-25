import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'a',
    href: 'https://www.google.com',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'a',
    href: 'https://www.google.com',
  },
}
