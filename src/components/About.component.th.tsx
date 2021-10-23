import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import CSS from 'csstype';

import Content from '../layouts/Content.layout'
import Title from '../layouts/Title.layout'
import Paragraph from '../layouts/Paragraph.layout'

const Screen = styled.div`
  min-height: 100vh;
`

const PhotoCredit = styled.p`
  font-weight: 100;
`

interface Props {
  windowHeight: number
}

const About: React.FC<Props> = ({ windowHeight }: Props) => {
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setViewportHeight(windowHeight + window.scrollY)
      // console.log("Window Height : " + windowHeight)
      // console.log("Window scrollY : " + (windowHeight + window.scrollY))
      // console.log(windowHeight + window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, true)

    return () => window.addEventListener('scroll', handleScroll, true)
  }, [])

  let fadeInAnimation: CSS.Properties = { opacity: viewportHeight >= windowHeight + 200 ? 1 : 0 }

  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='About'>
      <div style={fadeInAnimation}>
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
      </div>
    </Screen>
  )
}

export default About