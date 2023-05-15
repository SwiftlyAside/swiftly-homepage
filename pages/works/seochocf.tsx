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
  <Layout title="서초문화재단">
    <Container maxW="container.lg">
      <Title>
        서초문화재단 <Badge>2020-2021</Badge>
      </Title>
      <P>서초문화재단 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>전자정부프레임워크 기반 웹사이트 유지보수.</ListItem>
        <ListItem>
          플래시 기반 파일 업로드모듈을 dropzone.js 기반으로 재구현
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Spring MVC, Java, MySQL, MSSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.seochocf.or.kr">서초문화재단</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/seochocf.png" alt="서초문화재단" />
    </Container>
  </Layout>
)

export default Work
