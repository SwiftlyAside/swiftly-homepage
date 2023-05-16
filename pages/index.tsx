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
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box
          as="div"
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in South Korea.
        </Box>
        <Box display={{ lg: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              김찬수 (Ilan Kim)
            </Heading>
            <p>Web & Game Developer</p>
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
            안녕하세요, 저는 웹 개발과 게임 개발에 깊은 열정을 가진 개발자
            김찬수입니다.
            <br />
            새로운 기술에 대한 배움을 두려워하지 않는 개방적인 마음으로,
            <br />
            다양한 기술 스택을 활용해 독특하고 혁신적인 서비스를 만들어내는 것을
            목표로 하고 있습니다.
            <br />
            현재 저는{' '}
            <ChakraLink href="https://wiki2.co.kr/" isExternal>
              위키위키
            </ChakraLink>
            에서 개발자로 일하고 있습니다.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works" passHref>
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
            in Hanyang University ERACA Campus. (한양대학교 ERICA캠퍼스
            소프트웨어공학부 컴퓨터전공 학사 졸업)
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2021</BioYear>
            Worked at Epart (이파트)
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works at Wikiwiki inc (위키위키)
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Other profiles
          </Heading>
          <List>
            <ListItem>
              <ChakraLink href="https://github.com/SwiftlyAside" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  rightIcon={<ExternalLinkIcon mx="2px" />}
                >
                  @SwiftlyAside
                </Button>
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="https://www.linkedin.com/in/찬수-김-b4a032154/"
                isExternal
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  rightIcon={<ExternalLinkIcon mx="2px" />}
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
