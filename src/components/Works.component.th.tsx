import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Content from '../layouts/Content.layout'
import Title from '../layouts/Title.layout'
import Paragraph from '../layouts/Paragraph.layout'

import { projectsTH } from '../texts/project'
import Card from './SquareWorkCard.component'

const Screen = styled.div`
  min-height: 100vh;
`

const Grid = styled.div`
  margin: 20px 0px;
`

const Works: React.FC = () => {
  const projectElements = projectsTH.map((project, index) => {
    return <Card key={index}
      title={project.title} description={project.desc} link={project.projectLink} />
  })

  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='Projects'>
      <Content>
        <Title>ผลงานของเราเอง</Title>
        <Paragraph>
          ผลงานของเราทั้งหมด ผลงานที่เราเลือกมาแสดงตรงนี้
          เราชอบหมดเลยนะ ชอบหมดทุกอันจริง ๆ อันที่ทำแล้วน่าจะภูมิใจที่สุดก็คือ บอท Logker อ่ะ
        </Paragraph>
        <Grid className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          {projectElements}
        </Grid>

        <a href='https://github.com/ssuniie?tab=repositories' rel="noopener noreferrer" target="_blank">
          <motion.button className='border-2 rounded-sm border-gray-700 px-3 py-2 m-5 font-medium'
            whileHover={{ scale: 1.1, transition: { type: 'spring', duration: 0.3 } }}
          >
            ดูโปรเจคเพิ่มเติมที่ GitHub</motion.button>
        </a>
      </Content>
    </Screen>
  )
}

export default Works