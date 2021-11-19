import Layout from '../components/layouts/article'
import { Container, Heading } from '@chakra-ui/react'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
    </Container>
  </Layout>
)

export default Works
