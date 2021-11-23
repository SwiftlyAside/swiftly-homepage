import type { NextPage } from 'next'
import Link from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link as ChakraLink,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in South Korea.
        </Box>
        <Box display={{ lg: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ilan Kim
            </Heading>
            <p>Full-stack Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, lg: 0 }}
            ml={{ lg: 6 }}
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
          <Paragraph>
            Ilan Kim is a full-stack developer based in South Korea. He is eager
            to learn new things and ambitious to apply them in real life. When
            not online, he goes to watch football games. He produced websites
            for{' '}
            <Link href="/works/beerexpo">
              <ChakraLink>KIBEX</ChakraLink>
            </Link>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="cyan">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Busan (부산), South Korea.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated Bachelor&apos;s Degree in Computer Science and Engineering
            in Hanyang University ERACA Campus. (한양대학교 ERICA캠퍼스)
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at Epart (이파트)
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works at Wikiwiki (위키위키)
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Other profiles
          </Heading>
          <List>
            <ListItem>
              <ChakraLink
                href="https://github.com/SwiftlyAside"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @SwiftlyAside
                </Button>
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="https://www.linkedin.com/in/찬수-김-b4a032154/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @김찬수
                </Button>
              </ChakraLink>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
