import { ChangeEvent, ReactNode } from 'react'

import { Typography } from '../typography'

import s from './textfield.module.scss'

type TextFieldProps = {
  variant?: 'password' | 'search'
  disabled?: boolean
  error?: string
  iconStart?: ReactNode
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export const TextField = (props: TextFieldProps) => {
  const { variant = 'default', disabled = false, error = '', iconStart, value, ...rest } = props

  return (
    <div className={s.inputContainer}>
      {props.variant !== 'search' && (
        <Typography variant={'body2'} className={disabled ? s.disabled : s.label}>
          Input
        </Typography>
      )}
      <div className={s.textField}>
        <input
          type={variant}
          value={value}
          onChange={props.onChange}
          className={`${s[variant]} ${error ? s.inputError : s.input}`}
          disabled={disabled}
          {...rest}
        />
        <span className={s.icon}>{iconStart}</span>
      </div>
      {error && (
        <Typography variant={'caption'} className={s.error}>
          {error}
        </Typography>
      )}
    </div>
  )
}
