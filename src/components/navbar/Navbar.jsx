import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <div className='Navbar md:flex'>
            <p>Phatsanphon Nakaranurak</p>
            <a href='https://github.com/ssuniie'>
                <button
                    className="repo py-2 px-4 font-regular transition-all text-white hover:text-blue-300 border-2 border-transparent hover:border-blue-300"
                    >
                    Repository
                </button>
            </a>
        </div>
    )
}
