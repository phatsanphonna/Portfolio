import React from 'react'
import styled from 'styled-components'

const Layout = styled.p`
  padding: 0px 12px;
  text-indent: 1em;
  font-weight: 300;
`

interface Props {
    children: string
}

const Paragraph = ({ children }: Props) => {
    return (
        <Layout className='text-lg md:text-xl lg:text-2xl translate-x-12'>
            {children}
        </Layout>
    )
}

export default Paragraph