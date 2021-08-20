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
  font-weight: 300;
  padding: 0px 12px;
  text-indent: 1em;
`

const PhotoCredit = styled.p`
  font-weight: 100;
`

export default function Header() {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='DifferentsInMe'>
      <Content>
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>ความแตกต่างในตัวเรา</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
          เราเป็นคนที่ชอบทำอะไรแตกต่างนะ มันรู้สึกโดดเด่นดีอ่ะ ความแตกต่างที่เราเป็นนั้นก็คือ เราเขียนมือซ้าย
          มันค่อนข้างที่จะปกติแหล่ะ แต่รู้มั้ย มันทำอะไรลำบากมากเลยนะ โดยเฉพาะการทำข้อสอบบนโต้ะเล็กเชอร์อ่ะ
          อันนั้นนรกมากเลย และอีกอย่างหนึ่งก็คือ เราเป็นเด็กสายศิลป์ - ภาษาจีน แต่อยากเรียนคณะที่เกี่ยวกับคอม
          โคตรแปลกเลยมั้ย ว่าป้ะ? เด็กศิลป์ - ภาษาคงมีแหล่ะที่อยากเรียนในสายวิทย์อ่ะ แต่แค่ตัดสินใจช้าไปหน่อยเอง
          มันไม่ผิดหรอก
        </Paragraph>

        <StaticImage src='../images/difference.jpg'
          alt='This is me too! 😎'
          className='rounded-2xl w-64 md:w-64 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
          placeholder='dominantColor' quality='75' />
        <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
          รูปนี้ถ่ายโดยน้อนไมล์สุดน่ารักอีกเช่นเคยที่หอศิลป์กรุงเทพฯ เราชอบรูปนี้มาก ๆ</PhotoCredit>

      </Content>
    </Screen>
  )
}
