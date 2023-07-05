import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-button.module.scss'

type RadioButtonProps = {
  value: string
  id: string
  label?: string
}
export const RadioButton = (props: RadioButtonProps) => {
  const { value, id, label } = props

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioGroup.Item className={s.RadioGroupItem} value={value} id={id}>
        <RadioGroup.Indicator className={s.RadioGroupIndicator} />
      </RadioGroup.Item>
      {label && <label className={s.Label}>{label}</label>}
    </div>
  )
}
