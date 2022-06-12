import React from 'react'
import s from './Article.module.sass'
import img from '../../../media/picture3.png'
import Desc from '../../UI/Desc'

export default function Article({name, comment, date, picture}) {
  return (
    <div className={s.article}>
        <img src={img} alt="avatar" />
        <div className={s.text}>
            <p className={s.title}>{name}</p>
            <Desc>{comment}</Desc>
            <p className={s.data}>{date}</p>
        </div>
    </div>
  )
}
