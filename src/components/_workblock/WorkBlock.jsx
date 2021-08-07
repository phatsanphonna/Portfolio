import React from 'react'
import './workblock.scss'

import docs from '../../images/docs.png'

export default function WorkBlock(props) {
    const { title, desc, projectLink, techName } = props

    return (
        <a href={projectLink} rel="noopener noreferrer" target="_blank">
            <div className="WorkBlock py-1 px-2 rounded-md shadow transition-colors hover:bg-gray-600 mx-auto">
                <div className="icon inline-flex">
                    <img src={docs} alt={title} />
                    <h4 className='font-semibold'>{title}</h4>
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
