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
  <Layout title="풀스코어">
    <Container maxW="container.lg">
      <Title>
        풀스코어 <Badge>2021-2023</Badge>
      </Title>
      <P>풀스코어 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>PHP 기반 웹사이트 유지보수</ListItem>
        <br />
        <ListItem>
          Legacy to Codeigniter3 전환 작업 <Badge>2022-2023</Badge>
        </ListItem>
        <UnorderedList>
          <ListItem>기존 PHP코드를 Codeigniter3로 전환</ListItem>
          <ListItem>유지보수성 및 이식성 확보가 목적</ListItem>
        </UnorderedList>
        <br />
        <ListItem>
          아티스트 미니샵 리뉴얼작업 <Badge>2022</Badge>
        </ListItem>
        <UnorderedList>
          <ListItem>Bulma css framework를 커스텀하여 프론트 구현</ListItem>
          <ListItem>아티스트 미니샵 헤더이미지 섹션 추가</ListItem>
          <ListItem>아티스트 픽 섹션 추가</ListItem>
          <UnorderedList>
            <ListItem>뮤지션마켓 앰버서더 API를 호출하는 모델 구현</ListItem>
          </UnorderedList>
        </UnorderedList>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP5.5, Codeigniter3, MySQL, scss</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fullscore.co.kr">풀스코어</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fullscore.png" alt="풀스코어" />
    </Container>
  </Layout>
)

export default Work
