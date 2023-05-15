import Layout from '../../components/layouts/article'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="위키위키 (홈페이지)">
    <Container maxW="container.lg">
      <Title>
        위키위키 (홈페이지) <Badge>2021-2023</Badge>
      </Title>
      <P>위키위키 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>워드프레스 기반 웹사이트 유지보수</ListItem>
        <ListItem>정품등록관리 플러그인 개발</ListItem>
        <UnorderedList>
          <ListItem>정품등록인원 관리기능</ListItem>
          <ListItem>악기 브랜드 목록 관리기능</ListItem>
        </UnorderedList>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP7, Wordpress, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://wiki2.co.kr">위키위키</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/wiki2.png" alt="위키위키" />
    </Container>
  </Layout>
)

export default Work
