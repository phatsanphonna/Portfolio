import React from 'react'
import './footer.scss'

import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import github from '../../images/github.png'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='name'>
                <p>Made by Phatsanphon Nakaranurak</p>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/SSUNIIE12" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt='https://www.facebook.com/SSUNIIE12'/>
                </a>
                <a href="https://www.instagram.com/ssuniie" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt='https://www.instagram.com/ssuniie'/>
                </a>
                <a href="https://www.twitter.com/sansunssuniie" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt='https://www.twitter.com/sansunssuniie'/>
                </a>
                <a href="https://www.github.com/ssuniie" rel="noopener noreferrer" target="_blank">
                    <img src={github} alt='https://www.github.com/ssuniie'/>
                </a>
            </div>
        </div>
    )
}
