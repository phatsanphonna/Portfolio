import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <div className='Navbar md:flex'>
            <p>Phatsanphon Nakaranurak</p>
            <a href='https://github.com/ssuniie' rel="noopener noreferrer" target="_blank">
                <button className="repo py-1 px-2 font-regular shadow-md text-white bg-blue-300 hover:bg-blue-400">
                    Repository
                </button>
            </a>
        </div>
    )
}
