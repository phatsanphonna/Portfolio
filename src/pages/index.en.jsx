import React from "react"
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Navbar from "../components/Navbar.en"
import Header from "../components/Header"
import About from '../components/About.en'
import DifferentsInMe from '../components/DiffrerentsInMe.en'
import Works from '../components/Works.en'

import Footer from '../components/Footer.en'

import thumbnail from '../images/thumbnail.png'

const Screen = styled.div`
  max-width: 1280px;
  margin: auto;

  height: 100%;

  background-color: #ffffff;
`

const Hr = styled.hr`
  display: block; 
  height: 1px;
  border: 0; 
  border-top: 1px solid #ccc;
  margin: 1em 0; 
  padding: 0;

`
export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phatsanphon Nakaranurak</title>
        <meta
          name="description"
          content="Portfolio of Phatsanphon Nakaranurak"
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:image' content={thumbnail} />
        <link rel="icon" type="image/png" href="../../static/favicon.ico" />
      </Helmet>

      <Navbar />
      <Screen>
        <Header />
        <Hr />
        <About />
        <Hr />
        <DifferentsInMe />
        <Hr />
        <Works />
      </Screen>
      <Footer />
    </>
  )
}
