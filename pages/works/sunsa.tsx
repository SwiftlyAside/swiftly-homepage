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
  <Layout title="서울암사동유적">
    <Container maxW="container.lg">
      <Title>
        서울암사동유적 <Badge>2020-2021</Badge>
      </Title>
      <P>서울암사동유적 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>전자정부프레임워크 기반 웹사이트 유지보수</ListItem>
        <ListItem>박물관 관람 사전예약 기능 추가</ListItem>
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
          <span>Spring MVC, Java, Oracle</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sunsa.gangdong.go.kr">서울암사동유적</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sunsa.png" alt="서울암사동유적" />
    </Container>
  </Layout>
)

export default Work
