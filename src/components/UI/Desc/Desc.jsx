import React from 'react'
import s from './Desc.module.sass'

export default function Desc({children, color='#969AA0'}) {
  return (
    <p className={s.desc} style={{color: color}}>
        {children}
    </p>
  )
}
