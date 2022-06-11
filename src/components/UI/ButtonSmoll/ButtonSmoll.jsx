import React from 'react'
import s from './ButtonSmoll.module.sass'

export default function ButtonSmoll({children}) {
  return (
    <a className={s.buttonSmoll}>
        {children}
    </a>
  )
}
