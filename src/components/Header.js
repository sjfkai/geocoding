import React from 'react'
import { Menu } from 'antd'
import logo from '../assets/logo.png'

import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo"/>
      <Menu className={styles.menu}selectedKeys={['reverse']} mode="horizontal">
        <Menu.Item key="reverse">
          经纬度转地址
        </Menu.Item>
        <Menu.Item key="geocoding">
          <a href="https://maplocation.sjfkai.com" target="_blank" rel="noopener noreferrer">
            地理转经纬度
          </a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
