import { PageProps } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  min-height: 100vh;
`

export default function Screen({ children }: PageProps) {
    return (
        <Layout className='flex flex-col justify-center item-center min-h-screen'>
            {children}
        </Layout>
    )
}
