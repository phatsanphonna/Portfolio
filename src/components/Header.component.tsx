import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Content from '../layouts/Content.layout'

const Screen = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`

const Title = styled(motion.h1)`
  font-weight: 500;
  margin: 5px;
`

const EnglishName = styled(motion.h3)`
  font-weight: 300;
  margin: 5px;
`

const Header = () => {
  const hoverText = { scale: 1.1, transition: { type: 'spring', duration: 0.5 } }

  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='Index'>
      <Content>
        <Title className='tracking-widest text-2xl md:text-4xl lg:text-7xl' whileHover={hoverText} whileTap={hoverText}>ภัทร์สรรพ์พร นครานุรักษ์</Title>
        <EnglishName className='tracking-widest text-lg md:text-2xl lg:text-4xl'>Phatsanphon Nakaranurak</EnglishName>
      </Content>
    </Screen>
  )
}

export default Header
