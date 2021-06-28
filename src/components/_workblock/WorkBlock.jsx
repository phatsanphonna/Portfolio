import React from 'react'
import './workblock.scss'

export default function WorkBlock(props) {
    const { title, desc, projectLink, techName } = props

    return (
        <a href={projectLink} rel="noopener noreferrer" target="_blank">
            <div className="WorkBlock py-1 px-2 rounded-md shadow hover:bg-blue-800 mx-auto">
                <div className="icon inline-flex">
                    <img src='/images/docs.png' alt={title} />
                    <h4 className=''>{title}</h4>
                </div>
                <div className='content'>
                    <p>{desc}</p>
                </div>
                <div className='tech'>
                    <p>{techName}</p>
                </div>
            </div>
        </a >
    )
}
