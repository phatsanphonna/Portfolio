import React from 'react'
import styled from 'styled-components'

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

const Works = () => {
  const projectElements = projectsTH.map((project, index) => {
    return <Card key={index}
      title={project.title} description={project.desc} link={project.projectLink} />
  })
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='Projects'>
      <Content>
        <Title>My Works</Title>
        <Paragraph>
          This is my featured works. Work that I choose to this components, I like them all.
          Logker is my the most favorite project at all.
        </Paragraph>
        <Grid className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          {projectElements}
        </Grid>
      </Content>
    </Screen>
  )
}

export default Works