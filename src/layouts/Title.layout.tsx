import React from 'react'
import styled from 'styled-components'

const Layout = styled.h1`
  font-weight: 500;
  margin: 15px 0px;
`

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const Title = ({ children }: Props) => {
    return (
        <Layout className='text-3xl md:text-4xl lg:text-5xl translate-x-12'>
            {children}
        </Layout>
    )
}

export default Title