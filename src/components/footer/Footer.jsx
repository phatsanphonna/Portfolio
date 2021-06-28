import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='name'>
                <p>Made by Phatsanphon Nakaranurak</p>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/SSUNIIE12" rel="noopener noreferrer" target="_blank">
                    <img src='/images/facebook.png' alt='https://www.facebook.com/SSUNIIE12'/>
                </a>
                <a href="https://www.instagram.com/ssuniie" rel="noopener noreferrer" target="_blank">
                    <img src='/images/instagram.png' alt='https://www.instagram.com/ssuniie'/>
                </a>
                <a href="https://www.twitter.com/SSUNIIE12" rel="noopener noreferrer" target="_blank">
                    <img src='/images/twitter.png' alt='https://www.twitter.com/SSUNIIE12'/>
                </a>
                <a href="https://www.github.com/ssuniie" rel="noopener noreferrer" target="_blank">
                    <img src='/images/github.png' alt='https://www.github.com/ssuniie'/>
                </a>
            </div>
        </div>
    )
}
