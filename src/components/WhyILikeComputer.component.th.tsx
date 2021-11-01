import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Content from '../layouts/Content.layout'
import Title from '../layouts/Title.layout'
import Paragraph from '../layouts/Paragraph.layout'

const Screen = styled.div`
  min-height: 100vh;
`

const PhotoCredit = styled.p`
  font-weight: 100;
`

const WhyILikeComputer: React.FC = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='WhyILikeComputer'>
      <Content>
        <Title>ทำไมเราถึงชอบคอมพิวเตอร์</Title>
        <Paragraph>
          เพราะตอนเด็กเราอยู่แต่กับหน้าคอม แม่ก็ไปทำงาน แถมติดเกมด้วย ติดแบบงอมแงมเลย และ เราชอบสร้างอะไรขึ้นมาเอง
          เช่น เราเคยเปิดเซิฟ FiveM ตอน ม.3 แบบตอนนั้นเรารู้สึกชอบมาก แต่ก็มาคิดว่าถ้าเราเขียน mod ขึ้นมาเอง ใช้เอง
          เราก็สามารถตั้งค่าได้ด้วยตัวเอง มีบัคอะไรก็แก้เอง ทำเองใช้เอง แบบมันจะดีมากเลย
        </Paragraph>

        <StaticImage src='../images/screenshot.png'
          alt='This is me too! 😎'
          className='rounded-2xl w-64 md:w-80 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
          placeholder='dominantColor' quality={75} />

        <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
          นี่เป็นโค้ดของเว็บนี้แหล่ะ ไปดูได้ที่ <a href='https://github.com/ssuniie/Portfolio' rel="noopener noreferrer" target="_blank">GitHub</a> ได้เลย
        </PhotoCredit>
      </Content>
    </Screen>
  )
}

export default WhyILikeComputer