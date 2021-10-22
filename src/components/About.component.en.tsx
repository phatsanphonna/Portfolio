import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

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

const PhotoCredit = styled.p`
  font-weight: 100;
`

const About = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='About'>
      <Content>
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>About Me</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
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