import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CSS from 'csstype'

import Content from '../layouts/Content.layout'
import Title from '../layouts/Title.layout'
import Paragraph from '../layouts/Paragraph.layout'

import { projectsTH } from '../texts/project'
import Card from './SquareWorkCard.component'

const Screen = styled.div`
  min-height: 100vh;
`

const Grid = styled.div`
  margin: 60px 0px;
`

interface Props {
  windowHeight: number
}

const Works: React.FC<Props> = ({ windowHeight }: Props) => {
  const SCROLL_BREAKPOINT = (windowHeight * 4) + 200
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setViewportHeight((windowHeight) + window.scrollY)
      console.log({
        scrollY: window.scrollY,
        viewportHeight: (windowHeight) + window.scrollY,
        windowHeight,
        SCROLL_BREAKPOINT
      })
    }

    window.addEventListener('scroll', handleScroll, true)

    return () => window.addEventListener('scroll', handleScroll, true)
  }, [])

  let fadeInAnimation: CSS.Properties = { opacity: viewportHeight >= SCROLL_BREAKPOINT ? 1 : 0 }

  const projectElements = projectsTH.map((project, index) => {
    return <Card key={index}
      title={project.title} description={project.desc} link={project.projectLink} />
  })

  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='Projects'>
      <div style={fadeInAnimation}>
      <Content>
        <Title>ผลงานของเราเอง</Title>
        <Paragraph>
          ผลงานของเราทั้งหมด ผลงานที่เราเลือกมาแสดงตรงนี้
          เราชอบหมดเลยนะ ชอบหมดทุกอันจริง ๆ อันที่ทำแล้วน่าจะภูมิใจที่สุดก็คือ บอท Logker อ่ะ
        </Paragraph>
        <Grid className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          {projectElements}
        </Grid>
      </Content>
      </div>
    </Screen>
  )
}

export default Works