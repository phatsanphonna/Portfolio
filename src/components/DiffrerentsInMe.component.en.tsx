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

const DifferentsInMe = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='DifferentsInMe'>
      <Content>
        <Title>Me with Different Things</Title>
        <Paragraph>
          I am a guy that like to do things differently. It feels outstanding.
          The difference that I think is not common is "I'm left-handed" It's pretty normal,
          but you know, It make my life harder than normal. Especially doing the exam on the lecture table.
          That's hell, And one more thing is I'm an English - Chinese student,
          but I want to study in the computer related things. So weird, isn't it?
          English - Chinese student wants to study in Science related things.
          But just a little late to decide. It's not wrong. you know?
        </Paragraph>

        <StaticImage src='../images/difference.jpg'
          alt='This is me too! 😎'
          className='rounded-2xl w-64 md:w-80 lg:w-1/2 shadow-lg' style={{ margin: '60px' }}
          placeholder='dominantColor' quality={75} />
        <PhotoCredit className='text-sm md:text-md lg:text-lg translate-x-12'>
          This photo also was taken by N' Mile with her cuties at BACC. I like this photo a lot!</PhotoCredit>

      </Content>
    </Screen>
  )
}

export default DifferentsInMe
