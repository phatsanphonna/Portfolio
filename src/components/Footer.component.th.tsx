import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import facebook from '../images/social-media/facebook.svg'
import instagram from '../images/social-media/instagram.svg'
import github from '../images/social-media/github.svg'

import gatsby from '../images/tech/gatsby.svg'
import firebase from '../images/tech/firebase-icon.svg'
import framer from '../images/tech/framer-icon.svg'
import tailwind from '../images/tech/tailwind.svg'
import styledComp from '../images/tech/styled-comp.png'


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

const TechPicture = styled.img`
  display: inline-block;
  height: 16px;
  margin: 0px 4px;
`

const Credit = styled(motion.h3)`
  font-weight: 400;
`

const Footer = () => {
  const [isTechCreditShown, setIsTechCreditShown] = useState<Boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(isCreditShown)

      setIsTechCreditShown(!isTechCreditShown)
    }, 5000)

    return () => clearInterval(interval)
  }, [isTechCreditShown])

  return (
    <FooterDiv>
      {!isTechCreditShown ? (
        <Credit className='text-xs md:text-base'>
          สร้างสรรค์เว็บนี้โดย ภัทร์สรรพ์พร นครานุรักษ์ (เค้าเองยังไงหล่ะ 😊)
        </Credit>
      ) : (
        <Credit className='text-xs md:text-base' style={{ display: 'inline-block' }}>
          <span>
            พัฒนาเว็บนี้ด้วย{' '}
            <TechPicture src={gatsby} />
            <TechPicture src={tailwind} />
            <TechPicture src={styledComp} />
            <TechPicture src={framer} />
            <TechPicture src={firebase} />
          </span>
        </Credit>
      )
      }

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
    </FooterDiv >
  )
}

export default Footer