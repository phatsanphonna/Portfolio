import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Screen = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`

const Content = styled.div`
  display: grid;
  place-items: center;
`

const Title = styled(motion.h1)`
  font-weight: 500;
  margin: 5px;
`

const NotFound = () => {
  const hoverText = { scale: 1.1, transition: { type: 'spring', duration: 0.5 } }

  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen'>
      <Content>
        <Title whileHover={hoverText} whileFocus={hoverText} className='text-8xl translate-x-12'>404</Title>
        <p className='text-base md:text-lg lg:text-xl translate-x-12'>Page Not Found</p>
      </Content>
    </Screen>
  )
}

export default NotFound
