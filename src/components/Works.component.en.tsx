import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Content from '../layouts/Content.layout'
import Title from '../layouts/Title.layout'
import Paragraph from '../layouts/Paragraph.layout'

import Card from './SquareWorkCard.component'
import { projectsEN } from '../texts/project'

const Screen = styled.div`
  min-height: 100vh;
`

const Grid = styled.div`
  margin: 20px 0px;
`

const Works = () => {
  const projectElements = projectsEN.map((project, index) => {
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

        <a href='https://github.com/ssuniie?tab=repositories' rel="noopener noreferrer" target="_blank">
          <motion.button className='border-2 rounded-sm border-gray-700 px-3 py-2 m-5 font-medium'
            whileHover={{ scale: 1.1, transition: { type: 'spring', duration: 0.3 } }}
            whileTap={{ scale: 1.1, transition: { type: 'spring', duration: 0.3 } }}
          >
            View more projects on GitHub</motion.button>
        </a>
      </Content>
    </Screen>
  )
}

export default Works