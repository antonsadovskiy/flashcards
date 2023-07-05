import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../checkbox'

type PropsType<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultRules'> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  shouldUnregister,
  ...rest
}: PropsType<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    shouldUnregister,
  })

  const handleChange = onChange as (value: boolean) => void

  return <Checkbox checked={value} onChange={handleChange} {...rest} />
}
