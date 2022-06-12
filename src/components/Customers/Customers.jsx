import React from 'react'
import Title from '../UI/Title'
import Buyer from './Buyer'
import s from './Сustomers.module.sass'

export default function Customers({customers}) {
  return (
    <div className={s.customers}>
        <Title>Trusted By The Best</Title>
        <div className={s.buyers}>
            {customers.map(buyer=><Buyer key={buyer.id} {...buyer}/>)}
        </div>
    </div>
  )
}
