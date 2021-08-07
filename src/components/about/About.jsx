import React from 'react'
import './about.scss'

import pfp from '../../images/profile512.png'

export default function About() {
    return (
        <div className='About md:flex mx-5
         md:mx-0'>
            <div className="content">
                <h3 className='font-bold lg:text-2xl md:text-xl sm:text-lg'>About Me</h3>
                <p className='font-light lg:text-xl md:text-lg sm:text-base'>
                    17 years old, Still in high school final grade student, Wannabe a Programmer.
                    Live in Bangkok, Thailand. Created this site with a little bit
                    of HTML & CSS knowledge. Learning programming, Chinese and English (also Korean) right now.
                </p>
            </div>
            <div className="image">
                <img src={pfp}
                    alt="" className='w-60 mt-5 md:mt-0 md:ml-14 lg:w-48 mx-auto' />
            </div>
        </div>
    )
}
