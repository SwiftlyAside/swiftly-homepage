import type { NextPage } from 'next'
import { Box, Container, Heading, Image } from '@chakra-ui/react'
import Section from '../components/section'

const Page: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="yellow" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in South Korea.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ilan Kim
          </Heading>
          <p>Full-stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ilan.JPG"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  )
}

export default Page
