import { PageProps } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  place-items: center;
`
export default function Content({ children }: PageProps) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}
