import React, { useState, useEffect } from 'react'
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

const About = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='About'>
      <Content>
        <Title>About Me</Title>
        <Paragraph>
          All of my works came from the fact that I have learned the subject called "Technology Design" In the fifth grade
          It is a course that allows to try to write a program. Then I really enjoyed it. I can build anything that I want to create.
          For example, write a simple program to rename the file name in the same way, so I try to study coding with myself.
          and feel very fun. I can do it without bored. So I want this area to be a space for displaying my little works.
        </Paragraph>

        <StaticImage src='../images/pfp.jpg'
          alt='This is me too! 😎'
          className='rounded-2xl w-64 md:w-80 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
          placeholder='dominantColor' quality={75} />
        <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
          This photo was taken by N' Mile with her cuties at BACC.
        </PhotoCredit>
      </Content>
    </Screen>
  )
}

export default About