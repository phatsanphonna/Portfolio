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

const NotFound = () => {
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen'>
      <Content>
        <Title className='text-8xl translate-x-12'>404</Title>
        <p className='text-base md:text-lg lg:text-xl translate-x-12'>Page Not Found</p>
      </Content>
    </Screen>
  )
}

export default NotFound
