import React, { Component } from 'react'
import { Row, Col, Button, Popover } from 'antd'
import { HeartFilled, RedEnvelopeOutlined } from '@ant-design/icons'

import paypalImg from '../assets/paypal.png'
import wechatImg from '../assets/wechat.jpg'
import alipayImg from '../assets/alipay.jpeg'
import styles from './Donate.module.css'


class Donate extends Component {
  render() {
    return (
      <div className={styles.donate}>
        <Popover content={content} title="感谢您的支持！ Thanks for your support!" placement="topRight">
          <Button type="danger" ghost><RedEnvelopeOutlined /> 捐赠 Donate</Button>
        </Popover>
      </div>
    )
  }
}

const content = (
  <div className={styles['donate-content']}>
    <Row gutter={50}>
      <Col span={8}>
        <p> <img src={paypalImg} alt="paypal QRCode" /> </p>
        <p> <a href="https://www.paypal.me/sjfkai" target="_blank"  rel="noopener noreferrer">Pay for me</a> </p>
      </Col>
      <Col span={8}>
        <img src={wechatImg} alt="wechat QRCode" />
        <br />
        <br />
        <p> 打开微信[扫一扫] </p>
      </Col>
      <Col span={8}>
        <p> <img src={alipayImg} alt="alipay QRCode" /> </p>
        <p> 打开支付宝[扫一扫] </p>
      </Col>
    </Row>
    <div style={{color: 'red'}}><HeartFilled />中国加油！世界加油！<HeartFilled /></div>
    <div>感谢您的支持！本人会将疫情期间打赏通过各种渠道捐出。</div>
  </div>
);

export default Donate
