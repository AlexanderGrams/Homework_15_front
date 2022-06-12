import React from 'react'
import Desc from '../../UI/Desc'
import Slogan from '../../UI/Slogan'
import img from '../../../media/book1.png'
import s from './Book.module.sass'

export default function Book({name, price, comment, typeBook, picture}) {
  return (
    <div className={s.book}>
        <div>
            <img src={img} alt={picture} />
        </div>
        <div className={s.content}>
            <h3>{name}</h3>
            <p className={s.price}>{price}</p>
            <Desc>{comment}</Desc>
            <Slogan color='#1B3764'>{typeBook}</Slogan>
        </div>
    </div>
  )
}
