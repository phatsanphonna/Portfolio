import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  place-items: center;
`

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Content = ({ children }: Props) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default Content