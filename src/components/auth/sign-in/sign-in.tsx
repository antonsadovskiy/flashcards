import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { SignFormType } from '../sign-up'

export const SignIn = () => {
  const { control, handleSubmit } = useForm<Omit<SignFormType, 'confirmPassword'>>()

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <ControlledTextField label={'Email'} name={'email'} control={control} />
      <ControlledTextField
        variant={'password'}
        label={'Password'}
        name={'password'}
        control={control}
      />
      <ControlledCheckbox label={'remember me'} name={'rememberMe'} control={control} />
      <Button type={'submit'}>sign in</Button>
    </form>
  )
}
