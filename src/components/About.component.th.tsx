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

const About: React.FC = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='About'>
        <Content>
          <Title>เกี่ยวกับตัวเราเอง</Title>
          <Paragraph>
            ผลงานของเราทั้งหมด เกิดมาจากการที่เราได้เรียนวิชา ออกแบบเทคโนโลยี ในตอนม.5
            เป็นวิชาที่ให้เราได้ลองเขียนโปรแกรม แล้วเรารู้สึกสนุกไปกับมันมาก เราสามารถสร้างอะไรก็ได้ที่เราอยากสร้าง
            เช่น เขียนโปรแกรมง่าย ๆ มาแก้ชื่อไฟล์ให้ไปในทางเดียวกันเลยได้ลองไปศึกษาเอง แล้วรู้สึกสนุกมาก ทำได้แบบไม่มีเบื่อ
            เลยอยากให้พื้นที่นี้ เป็นพื่นที่เอาไว้แสดงงานที่เราตั้งใจทำมาครับ
          </Paragraph>

          <StaticImage src='../images/pfp.jpg'
            alt='This is me too! 😎'
            className='rounded-2xl w-64 md:w-80 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
            placeholder='dominantColor' quality={75} />
          <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
            รูปนี้ถ่ายโดยน้อนไมล์สุดน่ารักที่หอศิลป์กรุงเทพฯ
          </PhotoCredit>
        </Content>
    </Screen>
  )
}

export default About