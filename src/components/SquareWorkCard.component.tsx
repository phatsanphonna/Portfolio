import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
  width: 300px;
  height: 250px;

  padding: 16px;

  color: #ffffff;
  background-color: #444444;
`

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 12px;
`
interface Props {
  title: string;
  description: string;
  link: string;
}

const WorkCard: React.FC<Props> = ({ title, description, link }: Props) => {
  return (
    <Card className='shadow-md rounded-md' whileHover={{ scale: 1.05, transition: { type: 'spring', duration: 0.2 } }}>
      <Title className='text-xl'>{title}</Title>
      <p>
        {description}
      </p>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <button className='px-2 py-1 bg-gray-100 rounded-sm my-5 text-black font-medium' >
          GitHub
        </button>
      </a>
    </Card>
  )
}

export default WorkCard
