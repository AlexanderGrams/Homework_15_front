import React from 'react'
import Desc from '../../UI/Desc'
import s from './Buyer.module.sass'
import img from '../../../media/buyer.png'


export default function Buyer({logo, name, comment}) {
  return (
    <div className={s.buyer}>
        <img src={img} alt="logo" />
        <h6>{name}</h6>
        <Desc>{comment}</Desc>
    </div>
  )
}
