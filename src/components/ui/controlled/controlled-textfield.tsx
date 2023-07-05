import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '../textfield'

type PropsType<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultRules'> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  ...rest
}: PropsType<T>) => {
  const { field } = useController({
    name,
    control,
  })

  return <TextField {...field} {...rest} />
}
