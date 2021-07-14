import React from 'react'
import './about.scss'

export default function About() {
    return (
        <div className='About md:flex'>
            <div className="content">
                <h3 className='font-bold lg:text-2xl md:text-xl sm:text-lg'>About Me</h3>
                <p className='font-light lg:text-xl md:text-lg sm:text-base'>
                    17 years old, Still in high school final grade student, Wannabe a software engineer kid.
                    Live in Bangkok, Thailand. Created this site with a little bit
                    of HTML & CSS knowledge. Learning programming, Chinese and English right now
                </p>
            </div>
            <div className="image">
                <img src="/images/profile512.png"
                    alt="" className='w-32 md:ml-14 lg:w-48 mx-auto' />
            </div>
        </div>
    )
}
