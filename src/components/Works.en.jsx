import React from 'react'
import styled from 'styled-components'

import Card from './SquareWorkCard'

const Screen = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  display: grid;
  place-items: center;
`

const Title = styled.h1`
  font-weight: 500;
  margin: 5px 0px;
`

const Paragraph = styled.p`
  font-weight: 300;
  padding: 0px 12px;
  text-indent: 1em;
`

const Grid = styled.div`
  margin: 60px 0px;
`

const projects = [
  {
    title: "Logker",
    desc: `Logker is a logging bot suitable for small to mid-size server range. Support both Thai and English!`,
    projectLink: "https://github.com/ssuniie/Logker",
  },
  {
    title: "MTE",
    desc:
      `Modded Teleporting Experience suitable for 
      who wants to play with friends and make a little bit easy to play.`,
    projectLink: "https://github.com/ssuniie/MTE",
  },
  {
    title: "Portfolio",
    desc: "Portfolio website with React",
    techName: "JavaScript | React | Tailwind CSS",
    projectLink: "https://github.com/ssuniie/Portfolio",
  },
  {
    title: "COVID-19 Widget for iOS",
    desc: "widget that show daily cases of COVID-19",
    techName: "JavaScript",
    projectLink: "https://github.com/ssuniie/COVID-19-Scriptable",
  },
  {
    title: "Music overlay with Snip",
    desc: "Cool music overlay with Snip",
    techName: "HTML | CSS | JavaScript",
    projectLink: "https://github.com/ssuniie/music-overlay-with-Snip",
  },
  {
    title: "Quote of the requests",
    desc: "Random jokes when you are out of joke in your head.",
    techName: "JavaScript | Next | Tailwind CSS",
    projectLink: "https://github.com/ssuniie/QuoteOfTheRequests",
  },
]

export default function Header() {
  const projectElements = projects.map((project, index) => {
    return <Card index={index}
      title={project.title} description={project.desc} link={project.projectLink} />
  })
  return (
    <Screen className='flex flex-col justify-center item-center min-h-screen' id='Projects'>
      <Content>
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>My Works</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
          This is my featured works. Work that I choose to this components, I like them all.
          Logker is my the most favorite project at all.
        </Paragraph>
        <Grid className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          {projectElements}
        </Grid>
      </Content>
    </Screen>
  )
}
