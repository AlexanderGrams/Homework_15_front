import React from 'react'
import Logo from '../UI/Logo'
import Social from '../UI/Social'
import s from './Info.module.sass'
import Vector4 from '../../media/Vector4.png'
import Vector5 from '../../media/Vector5.png'
import Vector6 from '../../media/Vector6.png'
import SloganSmall from '../UI/SloganSmall'

export default function Info() {
  return (
    <div className={s.info}>
        <div>
            <Logo />
            <div className={s.socials}>
                <Social backgroundColor='transparent' outline='1px solid #FFCA42'>
                    <img src={Vector4} alt="vector4" />
                </Social>
                <Social backgroundColor='transparent' outline='1px solid #FFCA42'>
                    <img src={Vector5} alt="vector6" />
                </Social>
                <Social backgroundColor='transparent' outline='1px solid #FFCA42'>
                    <img src={Vector6} alt="vector6" />
                </Social>
            </div>
        </div>
        <div className={s.explore}>
            <h5>Explore</h5>
            <SloganSmall>Home</SloganSmall>
            <SloganSmall>About</SloganSmall>
            <SloganSmall>Articles</SloganSmall>
            <SloganSmall>Our Store</SloganSmall>
            <SloganSmall>Contact Us</SloganSmall>
        </div>
        <div className={s.utility}>
            <h5>Utility Pages</h5>
            <SloganSmall>Style Guide</SloganSmall>
            <SloganSmall>404 Not Found</SloganSmall>
            <SloganSmall>Password Protected</SloganSmall>
            <SloganSmall>Licenses</SloganSmall>
            <SloganSmall>Changelog</SloganSmall>
        </div>
        <div>
            <h5>Keep in Touch</h5>
            <div className={s.contact}>
                <h6>Address :</h6>
                <div>
                    <p>24A Kingston St, Los Vegas</p>
                    <p>NC 28202, USA.</p>
                </div>
                <h6>Mail :</h6>
                <p>support@pages.com</p>
                <h6>Phone :</h6>
                <p>(+22) 123 - 4567 - 900</p>
            </div>
        </div>
    </div>
  )
}
