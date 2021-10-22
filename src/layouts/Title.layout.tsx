import { PageProps } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Layout = styled.h1`
  font-weight: 500;
  margin: 15px 0px;
`

export default function Title({ children }: PageProps) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}
