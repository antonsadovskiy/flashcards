import { ChangeEvent, ReactNode } from 'react'

import { Typography } from '../typography'

import s from './textfield.module.scss'

export type TextFieldProps = {
  variant?: 'default' | 'password' | 'search'
  disabled?: boolean
  error?: string
  label?: string
  placeholder?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export const TextField = (props: TextFieldProps) => {
  const {
    variant = 'default',
    disabled = false,
    error,
    label,
    placeholder,
    iconStart,
    iconEnd,
    value,
    ...rest
  } = props

  return (
    <div className={s.inputContainer}>
      {props.label && (
        <Typography variant={'body2'} className={disabled ? s.disabled : s.label}>
          {label}
        </Typography>
      )}
      <div className={s.textField}>
        <span className={s.iconStart}>{iconStart}</span>
        <input
          type={variant}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={props.onChange}
          className={`${iconStart && s.inputIconStart} ${iconEnd && s.inputIconEnd} ${
            error ? s.inputError : s.input
          }`}
          {...rest}
        />
        <span className={s.iconEnd}>{iconEnd}</span>
      </div>
      {error && (
        <Typography variant={'caption'} className={s.error}>
          {error}
        </Typography>
      )}
    </div>
  )
}
