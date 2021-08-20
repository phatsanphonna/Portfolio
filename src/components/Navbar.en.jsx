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

export default function Navbar() {
  const mobileBreakpoint = 950;

  const [logo, setLogo] = useState(logoEN)
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
              <Link to='/en/#About'><ScrollLink to="About" spy={true} smooth={true}>
                About Me</ScrollLink></Link>
            </UlLi>
            <UlLi className='items transition-all hover:text-gray-300'>
              <Link to='/en/#DifferentsInMe'><ScrollLink to="DifferentsInMe" spy={true} smooth={true}>
                Me with Different Things</ScrollLink></Link>
            </UlLi>
            <UlLi className='items transition-all hover:text-gray-300'>
              <Link to='/en/#Projects'><ScrollLink to='Projects' smooth={true}>
                My Works</ScrollLink></Link>
            </UlLi>
            <UlLi className='items transition-all text-red-500 hover:text-red-700' style={{ fontWeight: 600 }}>
              <a href='https://phatsanphon.site'>
                ภาษาไทย</a>
            </UlLi>
          </ul>)
        }

        <button className='btn' onClick={toggleNav}>...</button>
      </nav>
    </NavbarDiv >
  )
}
