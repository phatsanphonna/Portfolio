import React from 'react'
import './header.scss'

export default function Header() {
    return (
        <div className='Header'>
            <div className='greetings'>
                <p className='font-semibold'>Hi! I am</p>
                <h1 className='font-bold'>Phatsanphon Nakaranurak.</h1>
                <p>
                    High school student at Rittityawannalai School.
                    <br />Wannabe kid to be a Software Engineer.
                    This kid dream's job is a diplomat.
                </p>
            </div>
        </div>
    )
}
