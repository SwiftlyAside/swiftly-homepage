import type { NextPage } from 'next'
import { Box, Container, Heading } from '@chakra-ui/react'

const Page: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="yellow" p={3} mb={6} alignContent="center">
        Hello, I&apos;m a full-stack developer based in South Korea.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ilan Kim
          </Heading>
          <p>Full-stack Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
