import React from 'react'
import Desc from '../UI/Desc'
import s from './CopyToday.module.sass'
import img from '../../media/CopyToday.png'

export default function CopyToday() {
  return (
    <div className={s.copy}>
        <div className={s.text}>
            <h2>Get Book Copy Today!</h2>
            <Desc color='#B4C7E7'>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</Desc>
        </div>
        <div className={s.img}>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}