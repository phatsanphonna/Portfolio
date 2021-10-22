import React from "react"
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Navbar from "../components/Navbar.component.th"
import Header from "../components/Header.component"
import About from '../components/About.component.th'
import DifferentsInMe from '../components/DiffrerentsInMe.component.th'
import WhyILikeComputer from '../components/WhyILikeComputer.component.th'
import Works from '../components/Works.component.th'
import Footer from '../components/Footer.component.th'

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
const Home = () => {
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
        <meta name="theme-color" content="#cccccc"></meta>
        <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossOrigin="anonymous"></script>
      </Helmet>

      <Navbar />
      <Screen>
        <Header />
        <Hr />
        <About />
        <Hr />
        <DifferentsInMe />
        <Hr />
        <WhyILikeComputer />
        <Hr />
        <Works />
      </Screen>
      <Footer />
    </>
  )
}

export default Home
