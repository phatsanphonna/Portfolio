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
  padding: 0px 12px;
  text-indent: 1em;
  font-weight: 300;
`

const Grid = styled.div`
  margin: 60px 0px;
`

const projects = [
  {
    title: "Logker",
    desc: `Logker คือ บอทเก็บประวัติสำหรับเซิฟเวอร์ Discord ของคุณ เหมาะกับเซิฟเวอร์ขนาดเล็กถึงขนาดกลาง 
    รองรับทั้งภาษาไทย และ ภาษาอังกฤษ`,
    projectLink: "https://github.com/ssuniie/Logker",
  },
  {
    title: "MTE",
    desc:
      `Modded Teleporting Experience เป็นปลั้กอินเกม Minecraft ที่จะช่วยอำนวยความสะดวกให้กับผู้เล่นในการเดินทางเล็กน้อย`,
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
    desc: "เป็น widget สำหรับบน iOS ที่แสดงยอดผู้ติดเชื้อโควิด-19 ในประเทศไทยแบบรายวัน",
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
        <Title className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>ผลงานของเราเอง</Title>
        <Paragraph className='text-lg md:text-xl lg:text-2xl translate-x-12'>
          ผลงานของเราทั้งหมด ผลงานที่เราเลือกมาแสดงตรงนี้
          เราชอบหมดเลยนะ ชอบหมดทุกอันจริง ๆ อันที่ทำแล้วน่าจะภูมิใจที่สุดก็คือ บอท Logker อ่ะ
        </Paragraph>
        <Grid className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          {projectElements}
        </Grid>
      </Content>
    </Screen>
  )
}
