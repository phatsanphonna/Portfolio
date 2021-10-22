import React from 'react'
import styled from 'styled-components'

import { projectsTH } from '../texts/project'
import Card from './SquareWorkCard.component'

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

const Grid = styled.div`
  margin: 60px 0px;
`


const Works = () => {
  const projectElements = projectsTH.map((project, index) => {
    return <Card key={index}
      title={project.title} description={project.desc} link={project.projectLink} />
  })
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='Projects'>
      <Content>
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>ผลงานของเราเอง</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
          ผลงานของเราทั้งหมด ผลงานที่เราเลือกมาแสดงตรงนี้
          เราชอบหมดเลยนะ ชอบหมดทุกอันจริง ๆ อันที่ทำแล้วน่าจะภูมิใจที่สุดก็คือ บอท Logker อ่ะ
        </Paragraph>
        <Grid className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          {projectElements}
        </Grid>
      </Content>
    </Screen>
  )
}

export default Works