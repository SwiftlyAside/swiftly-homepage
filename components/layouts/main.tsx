import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import { Router } from 'next/router'

type MainLayoutProps = {
  children: React.ReactNode
  router: Router
}

// const LazyVoxel = dynamic(() => import('../voxel-something'), {
//   ssr: false,
//   loading: () => <VoxelSomethingLoader />,
// })

const Layout = ({ children, router }: MainLayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ilan Kim's homepage" />
        <meta name="author" content="Ilan Kim" />
        <meta name="author" content="SwiftlyAside" />

        <title>Ilan Kim - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={24}>
        {/*<LazyVoxel />*/}
        {children}
      </Container>
    </Box>
  )
}

export default Layout
