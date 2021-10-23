import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import CSS from 'csstype'

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
const WhyILikeComputer: React.FC<Props> = ({ windowHeight }: Props) => {
  const SCROLL_BREAKPOINT = (windowHeight * 3) + 200
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setViewportHeight((windowHeight) + window.scrollY)
      // console.log({
      //   scrollY: window.scrollY,
      //   viewportHeight: (windowHeight) + window.scrollY,
      //   windowHeight,
      //   SCROLL_BREAKPOINT
      // })
    }

    window.addEventListener('scroll', handleScroll, true)

    return () => window.addEventListener('scroll', handleScroll, true)
  }, [])

  let fadeInAnimation: CSS.Properties = { opacity: viewportHeight >= SCROLL_BREAKPOINT ? 1 : 0 }
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='WhyILikeComputer'>
      <div style={fadeInAnimation}>
        <Content>
          <Title>ทำไมเราถึงชอบคอมพิวเตอร์</Title>
          <Paragraph>
            เพราะตอนเด็กเราอยู่แต่กับหน้าคอม แม่ก็ไปทำงาน แถมติดเกมด้วย ติดแบบงอมแงมเลย และ เราชอบสร้างอะไรขึ้นมาเอง
            เช่น เราเคยเปิดเซิฟ FiveM ตอน ม.3 แบบตอนนั้นเรารู้สึกชอบมาก แต่ก็มาคิดว่าถ้าเราเขียน mod ขึ้นมาเอง ใช้เอง
            เราก็สามารถตั้งค่าได้ด้วยตัวเอง มีบัคอะไรก็แก้เอง ทำเองใช้เอง แบบมันจะดีมากเลย
          </Paragraph>

          <StaticImage src='../images/whyilikecom.jpg'
            alt='This is me too! 😎'
            className='rounded-2xl w-64 md:w-80 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
            placeholder='dominantColor' quality={75} />
          <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
            เราไม่มีรูปตอนเล่นเกมอ่ะ เอารูปนี้ไปก่อนและกันนะ
          </PhotoCredit>
        </Content>
      </div>
    </Screen>
  )
}

export default WhyILikeComputer