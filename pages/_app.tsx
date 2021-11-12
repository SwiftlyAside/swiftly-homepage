import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
