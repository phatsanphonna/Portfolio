import React from 'react'
import './header.scss'

export default function Header() {
    return (
        <div className='Header'>
            <div className='greetings flex flex-col justify-center item-center min-h-screen'>
                <p className='font-normal lg:text-3xl md:text-xl text-lg'>Hi! I am</p>
                <h1 className='font-bold lg:text-5xl md:text-3xl text-2xl'>Phatsanphon Nakaranurak.</h1>
                <p className='font-light lg:text-2xl md:text-lg text-base'>
                    High school student at Rittityawannalai School.
                    <br />Wannabe kid to be a Software Engineer.
                    This kid old dream's job is a diplomat.
                </p>
            </div>
        </div>
    )
}
