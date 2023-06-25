import { ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className={s.card}>{children}</div>
}
