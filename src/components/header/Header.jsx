import React from 'react'
import './header.scss'

export default function Header() {
    return (
        <div className='Header'>
            <div className='greetings'>
                <p className='font-normal lg:text-2xl md:text-xl sm:text-lg'>Hi! I am</p>
                <h1 className='font-bold lg:text-4xl md:text-3xl sm:text-2xl'>Phatsanphon Nakaranurak.</h1>
                <p className='font-light lg:text-xl md:text-lg sm:text-base'>
                    High school student at Rittityawannalai School.
                    <br />Wannabe kid to be a Software Engineer.
                    This kid dream's job is a diplomat.
                </p>
            </div>
        </div>
    )
}
