import React from 'react'
import styled from 'styled-components'

import NotFoundComponent from '../components/NotFound.component'
import Navbar from '../components/Navbar.component.th'

const Screen = styled.div`
  max-width: 1280px;
  margin: auto;

  height: 100%;

  background-color: #000;
`

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Screen>
        <NotFoundComponent />
      </Screen>
    </>
  )
}

export default NotFound
