import React from 'react'
import logo from '../assets/logo.png'

import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo"/>
    </div>
  )
}
