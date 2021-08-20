import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
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
export default function WorkCard({ title, description, link }) {
  return (
    <Card className='shadow-md rounded-md'>
      <Title className='text-xl'>{title}</Title>
      <p>
        {description}
      </p>
      <a href={link}>
        <button className='px-2 py-1 bg-gray-100 rounded-sm my-5 text-black font-medium'>ดูเพิ่มเติม</button>
      </a>
    </Card>
  )
}
