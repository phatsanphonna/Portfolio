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

const DifferentsInMe: React.FC = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='DifferentsInMe'>
        <Content>
          <Title>ความแตกต่างในตัวเรา</Title>
          <Paragraph>
            เราเป็นคนที่ชอบทำอะไรแตกต่างนะ มันรู้สึกโดดเด่นดีอ่ะ ความแตกต่างที่เราเป็นนั้นก็คือ เราเขียนมือซ้าย
            มันค่อนข้างที่จะปกติแหล่ะ แต่รู้มั้ย มันทำอะไรลำบากมากเลยนะ โดยเฉพาะการทำข้อสอบบนโต้ะเล็กเชอร์อ่ะ
            อันนั้นนรกมากเลย และอีกอย่างหนึ่งก็คือ เราเป็นเด็กสายศิลป์ - ภาษาจีน แต่อยากเรียนคณะที่เกี่ยวกับคอม
            โคตรแปลกเลยมั้ย ว่าป้ะ? เด็กศิลป์ - ภาษาคงมีแหล่ะที่อยากเรียนในสายวิทย์อ่ะ แต่แค่ตัดสินใจช้าไปหน่อยเอง
            มันไม่ผิดหรอก
          </Paragraph>

          <StaticImage src='../images/difference.jpg'
            alt='This is me too! 😎'
            className='rounded-2xl w-64 md:w-80 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
            placeholder='dominantColor' quality={75} />
          <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
            รูปนี้ถ่ายโดยน้อนไมล์สุดน่ารักอีกเช่นเคยที่หอศิลป์กรุงเทพฯ เราชอบรูปนี้มาก ๆ</PhotoCredit>
        </Content>
    </Screen>
  )
}

export default DifferentsInMe