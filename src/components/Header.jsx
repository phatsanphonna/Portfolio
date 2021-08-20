import React from 'react'
import styled from 'styled-components'

const Screen = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`

const Content = styled.div`
  display: grid;
  place-items: center;
`

const Title = styled.h1`
  font-weight: 500;
  margin: 5px;
`

const EnglishName = styled.h3`
  font-weight: 300;
  margin: 5px;
`

export default function Header() {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen'>
      <Content>
        <Title className='tracking-widest text-2xl md:text-4xl lg:text-7xl translate-x-12'>ภัทร์สรรพ์พร นครานุรักษ์</Title>
        <EnglishName className='tracking-widest text-lg md:text-2xl lg:text-4xl'>Phatsanphon Nakaranurak</EnglishName>
      </Content>
    </Screen>
  )
}
