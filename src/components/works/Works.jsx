import React from 'react'
import WorkBlock from '../_workblock/WorkBlock.jsx'
import './works.scss'

const projects = [
    {
        title: 'Logker',
        desc: ('Logker is a logging bot suitable for small to mid-size server range. '
            + 'Support both Thai and English!'),
        techName: 'Python discord.py',
        projectLink: 'https://github.com/ssuniie/Logker'
    },
    {
        title: 'osu! 中文 V1',
        desc: '中文 V1 osu! skin by ssuniie/Meiilin',
        techName: 'Photoshop',
        projectLink: 'https://github.com/ssuniie/osuZHV1'
    },
    {
        title: 'MTE',
        desc: ('Modded Teleporting Experience suitable for '
            + 'who wants to play with friends and make a little bit easy to play.'),
        techName: 'Java Spigot',
        projectLink: 'https://github.com/ssuniie/MTE'
    },
    {
        title: 'Portfolio',
        desc: 'Portfolio website with React',
        techName: 'JavaScript React Tailwind CSS',
        projectLink: 'https://github.com/ssuniie/Portfolio'
    },
    {
        title: 'Sleep Calculator',
        desc: 'A high school student create sleep calculator with and easy C',
        techName: 'C',
        projectLink: 'https://github.com/ssuniie/sleepcalc'
    }
]

export default function Works() {
    const projectElements = projects.map((project, index) => {
        return <WorkBlock
            key={index}
            title={project.title}
            desc={project.desc}
            techName={project.techName}
            projectLink={project.projectLink}
        />
    })
    return (
        <div className="Works">
            <h2 className='font-semibold'>Feature Works</h2>
            <div className="featured grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {projectElements}
            </div>
        </div>
    )
}
