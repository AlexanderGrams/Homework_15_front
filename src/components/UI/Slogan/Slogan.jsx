import React from 'react'
import s from './Slogan.module.sass'

export default function Slogan({children, text=''}) {
  return (
    <div className={s.slogan}>
        <p className={s.title}>{children}</p>
        <p className={s.subtitle}>{text}</p>
    </div>
  )
}
