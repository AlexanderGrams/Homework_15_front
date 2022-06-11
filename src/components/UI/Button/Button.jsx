import React from 'react'
import s from './Button.module.sass'

export default function Button({children}) {
  return (
    <div className={s.button}>
        {children}
    </div>
  )
}
