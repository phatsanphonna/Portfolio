import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'gatsby'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import '../styles/Navbar.css'

import logoEN from '../images/logo-en.svg'

const NavbarDiv = styled.header`
  background-color: #eeeeee;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 5%;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`

const UlLi = styled(motion.li)`
  display: inline-block;
  padding: 0px 20px;

  font-weight: 400;
`

const Navbar = () => {
  const mobileBreakpoint = 1300;
  const hoverText = { scale: 1.1, transition: { type: 'spring', duration: 0.01 } }

  const [logo, _] = useState(logoEN)
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : mobileBreakpoint)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <NavbarDiv>
      <Link to='/'>
        <motion.img src={logo} alt="Logo" className='w-64 lg:w-72' whileHover={{ scale: 1.05, transition: { type: 'spring', duration: 0.5 } }} />
      </Link>
      <nav>
        {
          (screenWidth > mobileBreakpoint) ? (
            <ul className='list'>
              <UlLi className='items transition-all' whileHover={hoverText}>
                <ScrollLink to="About" spy={false} smooth={true}>
                  เกี่ยวกับตัวเราเอง</ScrollLink>
              </UlLi>
              <UlLi className='items transition-all' whileHover={hoverText}>
                <ScrollLink to="DifferentsInMe" spy={false} smooth={true}>
                  ความแตกต่างในตัวเรา</ScrollLink>
              </UlLi>
              <UlLi className='items transition-all' whileHover={hoverText}>
                <ScrollLink to="WhyILikeComputer" spy={false} smooth={true}>
                  ทำไมเราถึงชอบคอมพิวเตอร์</ScrollLink>
              </UlLi>
              <UlLi className='items transition-all' whileHover={hoverText}>
                <ScrollLink to='Projects' spy={false} smooth={true}>
                  ผลงานของเรา</ScrollLink>
              </UlLi>
              <UlLi className='items transition-all text-blue-500 hover:text-blue-700'
                style={{ fontWeight: 600 }}
                whileHover={hoverText}>
                <Link to='/en'>
                  English</Link>
              </UlLi>
            </ul>
          ) : (
            <UlLi className='items transition-all text-blue-500 hover:text-blue-700'
              style={{ fontWeight: 600 }}
              whileHover={hoverText}>
              <Link to='/en'>
                English</Link>
            </UlLi>
          )
        }
      </nav>
    </NavbarDiv>
  )
}

export default Navbar