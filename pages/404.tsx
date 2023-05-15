import Link from 'next/link'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react'

const NotFound = () => (
  <Container>
    <Heading as="h1">404</Heading>
    <Text>Page not found</Text>
    <Divider my={6} />
    <Box my={6} alignItems="center">
      <Link href="/" passHref>
        <Button colorScheme="cyan">Go to home page</Button>
      </Link>
    </Box>
  </Container>
)

export default NotFound
