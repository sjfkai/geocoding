import React, { Component } from 'react'
import { Popover } from 'antd'
import { RedEnvelopeOutlined } from '@ant-design/icons'

import wechatImg from '../assets/wechat.jpg'
import alipayImg from '../assets/alipay.jpeg'
import styles from './Donate.module.css'


class Donate extends Component {
  render() {
    return (
      <div className={styles.donate}>
        <Popover content={content} title="感谢您的支持！ Thanks for your support!" placement="topRight">
          <div className={styles.button}><RedEnvelopeOutlined /> 打赏 <RedEnvelopeOutlined /> </div>
        </Popover>
      </div>
    )
  }
}

const content = (
  <div className={styles['donate-content']}>
    <div className={styles.qrcodes}>
      <div className={styles.item}>
        <img className={styles.image} src={wechatImg} alt="wechat QRCode" />
        <p className={styles.desc} > 打开微信[扫一扫] </p>
      </div>
      <div className={styles['item']}>
        <img className={styles.image} src={alipayImg} alt="alipay QRCode" />
        <p className={styles.desc} > 打开支付宝[扫一扫] </p>
      </div>
    </div>
    <br />
    <div>本站完全免费，如果本站为你节约了时间，可否请我喝杯咖啡<span role="img" aria-label="Coffe">☕️</span>。非常感谢！</div>
  </div>
);

export default Donate
