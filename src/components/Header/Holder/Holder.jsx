import React from 'react'
import s from './Holder.module.sass'
import imgHolder from '../../../media/holder.png'
import Button from '../../UI/Button'
import Desc from '../../UI/Desc'
import Slogan from '../../UI/Slogan'

export default function Holder() {
  return (
    <div className={s.holder}>
        <div className={s.holderText}>
            <p className={s.wellcome}>
                Welcome to Pages!!!
            </p>
            <h1>Your Books From The Best Writer.</h1>
            <Desc color='#B4C7E7'>
                We believe that reading books are essential to a healthy culture.
                They’re where authors can connect with readers.
            </Desc>
            <Button margin='40px 0'>Order Today</Button>
            <div className={s.slogan}>
                <Slogan text='250pages'>Pages:</Slogan>
                <Slogan text='10 Hours'>Length:</Slogan>
                <Slogan text='4.5/5 (305 ratings)'>Rating:</Slogan>
            </div>
        </div>
        <div className={s.holderImg}>
            <img src={imgHolder} alt="imgHolder" />
        </div>
    </div>
  )
}
