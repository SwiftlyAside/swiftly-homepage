import Layout from '../../components/layouts/article'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="PlayKalimba">
    <Container maxW="container.lg">
      <Title>
        PlayKalimba <Badge>2021-2022</Badge>
      </Title>
      <P>
        PlayKalimba는 칼림바 연주 교육목적으로 개발된 리듬액션게임
        어플리케이션입니다.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
        <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity,C#</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">Coming soon</Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
