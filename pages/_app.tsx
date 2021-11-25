import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
