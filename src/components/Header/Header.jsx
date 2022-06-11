import React from 'react'
import s from './Header.module.sass'
import Nav from './Nav'

export default function Header() {
  return (
    <div className={s.header}>
        <Nav />
        <main></main>
    </div>
  )
}
