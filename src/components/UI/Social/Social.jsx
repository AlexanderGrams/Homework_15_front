import React from 'react'
import s from './Social.module.sass'

export default function Social({children}) {
  return (
    <div className={s.social}>
        <p>{children}</p>
    </div>
  )
}
