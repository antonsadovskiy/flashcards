import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  className?: string
  defaultColor?: boolean
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const {
    variant = 'caption',
    className,
    as: Component = 'p',
    defaultColor = false,
    ...rest
  } = props

  return (
    <Component
      className={`${s[variant]} ${defaultColor && s.defaultColor} ${className}`}
      {...rest}
    />
  )
}
