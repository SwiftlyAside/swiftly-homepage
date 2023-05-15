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
  <Layout title="경기연구원">
    <Container maxW="container.lg">
      <Title>
        경기연구원 <Badge>2020-2021</Badge>
      </Title>
      <P>경기연구원 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>워드프레스 기반 웹사이트 유지보수</ListItem>
        <ListItem>관리자 지정 게시물기능 추가</ListItem>
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
          <Link href="https://gri.re.kr">경기연구원</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/gri.png" alt="경기연구원" />
    </Container>
  </Layout>
)

export default Work
