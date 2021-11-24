import Link from 'next/link'
import { HTMLProps } from 'react'
import {
  Badge,
  Box,
  Heading,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }: HTMLProps<HTMLHeadingElement>) => (
  <Box>
    <Link href="/works" passHref>
      <ChakraLink>Works</ChakraLink>
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }: HTMLProps<HTMLImageElement>) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: HTMLProps<HTMLSpanElement>) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
