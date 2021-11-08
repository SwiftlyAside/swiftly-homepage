import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Router } from 'next/router'

type MainLayoutProps = {
  children: React.ReactNode
  router: Router
}

const Layout = ({ children }: MainLayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ilan Kim's homepage" />
        <title>Ilan Kim - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
