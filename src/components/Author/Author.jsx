import React from 'react'
import Desc from '../UI/Desc'
import s from './Author.module.sass'
import qr from '../../media/qr.png'
import author from '../../media/author1.png'
import Picture from '../UI/Picture'

export default function Author() {
  return (
    <div className={s.author}>
        <Picture img={author}/>
        <div className={s.content}>
            <h2>About the Author</h2>
            <Desc>
                We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.
            </Desc>
            <div className={s.info}>
                <div>
                    <p className={s.num}>02</p>
                    <Desc>Books Published</Desc>
                </div>
                <div>
                    <p className={s.num}>4.5</p>
                    <Desc>User Reviews</Desc>
                </div>
                <div>
                    <p className={s.num}>04</p>
                    <Desc>Best Seller Awards</Desc>
                </div>
            </div>
            <div className={s.contacts}>
                <img src={qr} alt="qr" />
                <div className={s.contactsText}>
                    <p className={s.name}>John Abraham , Ph.d</p>
                    <Desc color='#B4C7E7'>Mail: johnabraham@gmail.com</Desc>
                    <Desc color='#B4C7E7'>Phone: (+2) 123 545 9000</Desc>
                </div>
            </div>
        </div>
    </div>
  )
}
