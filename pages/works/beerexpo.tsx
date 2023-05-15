import Layout from '../../components/layouts/article'
import {
  Badge,
  Center,
  Container,
  Image,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="KIBEX">
    <Container maxW="container.lg">
      <Title>
        KIBEX <Badge>2020-2021</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="https://www.beerexpo.kr/design/default/img/main/logo.png"
          alt="logo"
        />
      </Center>
      <P>비어엑스포(KIBEX) 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>PHP 기반 웹 구축</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP 7, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://beerexpo.kr">KIBEX</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kibex.png" alt="kibex" />
    </Container>
  </Layout>
)

export default Work
