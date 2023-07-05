import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'

export type SignFormType = {
  email: string
  password: string
  confirmPassword: string
  rememberMe: boolean
}

export const SignUp = () => {
  const { control, handleSubmit } = useForm<Omit<SignFormType, 'rememberMe'>>()

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
      <ControlledTextField
        variant={'password'}
        label={'Confirm password'}
        name={'confirmPassword'}
        control={control}
      />
      <Button type={'submit'}>sign up</Button>
    </form>
  )
}
