import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Screen = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  display: grid;
  place-items: center;
`

const Title = styled.h1`
  font-weight: 500;
  margin: 15px 0px;
`

const Paragraph = styled.p`
  padding: 0px 12px;
  text-indent: 1em;
  font-weight: 300;
`

const PhotoCredit = styled.p`
  font-weight: 100;
`

export default function Header() {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='WhyILikeComputer'>
      <Content>
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>ทำไมเราถึงชอบคอมพิวเตอร์</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
          เพราะตอนเด็กเราอยู่แต่กับหน้าคอม แม่ก็ไปทำงาน แถมติดเกมด้วย ติดแบบงอมแงมเลย และ เราชอบสร้างอะไรขึ้นมาเอง
          เช่น เราเคยเปิดเซิฟ FiveM ตอน ม.3 แบบตอนนั้นเรารู้สึกชอบมาก แต่ก็มาคิดว่าถ้าเราเขียน mod ขึ้นมาเอง ใช้เอง
          เราก็สามารถตั้งค่าได้ด้วยตัวเอง มีบัคอะไรก็แก้เอง ทำเองใช้เอง แบบมันจะดีมากเลย
        </Paragraph>

        <StaticImage src='../images/whyilikecom.jpg'
          alt='This is me too! 😎'
          className='rounded-2xl w-64 md:w-64 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
          placeholder='dominantColor' quality='75' />
        <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
          เราไม่มีรูปตอนเล่นเกมอ่ะ เอารูปนี้ไปก่อนและกันนะ
        </PhotoCredit>
      </Content>
    </Screen>
  )
}
