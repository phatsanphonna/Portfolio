import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'gatsby'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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

const UlLi = styled.li`
  display: inline-block;
  padding: 0px 20px;

  font-weight: 400;
`

const Navbar = () => {
  const mobileBreakpoint = 950;

  const [logo] = useState(logoEN)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : mobileBreakpoint)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

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
      <a href='https://phatsanphon.site'>
        <img src={logo} alt="Logo" className='w-56 md:w-64 lg:w-72' />
      </a>
      <nav>
        {
          (toggleMenu || screenWidth > mobileBreakpoint) && (<ul className='list'>
            <UlLi className='items transition-all hover:text-gray-300'>
              <ScrollLink to="About" spy={false} smooth={true}>
                เกี่ยวกับตัวเราเอง</ScrollLink>
            </UlLi>
            <UlLi className='items transition-all hover:text-gray-300'>
              <ScrollLink to="DifferentsInMe" spy={false} smooth={true}>
                ความแตกต่างในตัวเรา</ScrollLink>
            </UlLi>
            <UlLi className='items transition-all hover:text-gray-300'>
              <ScrollLink to="WhyILikeComputer" spy={false} smooth={true}>
                ทำไมเราถึงชอบคอมพิวเตอร์</ScrollLink>
            </UlLi>
            <UlLi className='items transition-all hover:text-gray-300'>
              <ScrollLink to='Projects' spy={false} smooth={true}>
                ผลงานของเรา</ScrollLink>
            </UlLi>
            <UlLi className='items transition-all text-blue-500 hover:text-blue-700' style={{ fontWeight: 600 }}>
              <Link to='/en'>
                English</Link>
            </UlLi>
          </ul>)
        }

        <button className='btn' onClick={toggleNav}>...</button>
      </nav>
    </NavbarDiv>
  )
}

export default Navbar