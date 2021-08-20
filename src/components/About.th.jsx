import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Screen = styled.div`
  min-height: calc(100vh + 60px);
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
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='About'>
      <Content>
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>เกี่ยวกับตัวเราเอง</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
          ผลงานของเราทั้งหมด เกิดมาจากการที่เราได้เรียนวิชา ออกแบบเทคโนโลยี ในตอนม.5
          เป็นวิชาที่ให้เราได้ลองเขียนโปรแกรม แล้วเรารู้สึกสนุกไปกับมันมาก เราสามารถสร้างอะไรก็ได้ที่เราอยากสร้าง
          เช่น เขียนโปรแกรมง่าย ๆ มาแก้ชื่อไฟล์ให้ไปในทางเดียวกันเลยได้ลองไปศึกษาเอง แล้วรู้สึกสนุกมาก ทำได้แบบไม่มีเบื่อ
          เลยอยากให้พื้นที่นี้ เป็นพื่นที่เอาไว้แสดงงานที่เราตั้งใจทำมาครับ
        </Paragraph>

        <StaticImage src='../images/pfp.jpg'
          alt='This is me too! 😎'
          className='rounded-2xl w-64 md:w-64 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
          placeholder='dominantColor' quality='75' />
        <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
          รูปนี้ถ่ายโดยน้อนไมล์สุดน่ารักที่หอศิลป์กรุงเทพฯ
          </PhotoCredit>
      </Content>
    </Screen>
  )
}
