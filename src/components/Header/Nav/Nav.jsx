import React from 'react';
import Logo from '../../UI/Logo';
import v1 from '../../../media/Vector1.png'
import v2 from '../../../media/Vector2.png'
import v3 from '../../../media/Vector3.png'
import Social from '../../UI/Social';
import s from './Nav.module.sass';
import ButtonSmoll from '../../UI/ButtonSmoll';
import Button from '../../UI/Button';

export default function Nav() {
  return (
    <div className={s.nav}>
        <div className={s.wrapSocials}>
            <Logo />
            <div className={s.socials}>
                <Social>
                    <img src={v1} alt="f" />
                </Social>
                <Social>
                    <img src={v2} alt="t" />
                </Social>
                <Social>
                    <img src={v3} alt="in" />
                </Social>
            </div>
        </div>
        <div className={s.wrapMenu}>
            <div className={s.menu}>
                <ButtonSmoll>Home</ButtonSmoll>
                <ButtonSmoll>About</ButtonSmoll>
                <ButtonSmoll>Pages</ButtonSmoll>
                <ButtonSmoll>Contact Us</ButtonSmoll>
            </div>
            <Button>Order Today</Button>
        </div>
    </div>
  )
}
