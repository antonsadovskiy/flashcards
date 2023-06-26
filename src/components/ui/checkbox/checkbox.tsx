import * as CheckBox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  label?: string
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, label, disabled = false, onChange } = props

  return (
    <div className={s.checkboxContainer}>
      <CheckBox.Root
        className={`${s.checkboxRoot} ${checked && s.checked}`}
        checked={checked}
        disabled={disabled}
        onCheckedChange={onChange}
      >
        <CheckBox.Indicator className={s.checkboxIndicator}>
          <CheckIcon />
        </CheckBox.Indicator>
      </CheckBox.Root>
      {label && (
        <Typography variant={'body2'} className={disabled ? s.disabledLabel : s.label}>
          {label}
        </Typography>
      )}
    </div>
  )
}
