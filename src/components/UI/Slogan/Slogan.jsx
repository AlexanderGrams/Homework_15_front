import React from 'react'
import s from './Slogan.module.sass'

export default function Slogan({children, text='', color='#fff'}) {
  return (
    <div className={s.slogan}>
        <p className={s.title} style={{color: color}}>{children}</p>
        <p className={s.subtitle}>{text}</p>
    </div>
  )
}
