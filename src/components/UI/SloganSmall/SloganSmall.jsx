import React from 'react'
import s from './SloganSmall.module.sass'

export default function SloganSmall({children}) {
  return (
    <div className={s.sloganSmall}>
        {children}
    </div>
  )
}
