import React from 'react'
import styled from 'styled-components'

import facebook from '../images/social-media/facebook.svg'
import instagram from '../images/social-media/instagram.svg'
import github from '../images/social-media/github.svg'


const FooterDiv = styled.footer`
  background-color: #eeeeee;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 5%;
  z-index: 1;
`

const SocialMedia = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  margin: 6px 0px;
`

const SocialMediaURL = styled.img`
  height: 16px;
  margin: 4px 16px;
`

const Credit = styled.h3`
  font-weight: 400;
`

export default function Footer() {
  return (
    <FooterDiv>
      <Credit className='text-xs md:text-base'>
        สร้างสรรค์เว็บนี้โดย ภัทร์สรรพ์พร นครานุรักษ์ (เค้าเองยังไงหล่ะ 😊)
      </Credit>
      <SocialMedia>
        <a
          href="https://www.facebook.com/SSUNIIE12"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SocialMediaURL src={facebook} alt="https://www.facebook.com/SSUNIIE12" />
        </a>
        <a
          href="https://www.instagram.com/ssuniie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SocialMediaURL src={instagram} alt="https://www.instagram.com/ssuniie" />
        </a>
        <a
          href="https://www.github.com/ssuniie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SocialMediaURL src={github} alt="https://www.github.com/ssuniie" />
        </a>
      </SocialMedia>
    </FooterDiv>
  )
}
