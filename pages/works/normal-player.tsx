import Layout from '../../components/layouts/article'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NormalPlayer">
    <Container maxW="container.lg">
      <Title>
        NormalPlayer <Badge>2017</Badge>
      </Title>
      <P>NormalPlayer는 안드로이드용 로컬 음악플레이어입니다.</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>안드로이드 기기내의 음악 재생.</ListItem>
        <ListItem>재생목록 관리 기능.</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">Coming soon</Link>
        </ListItem>
      </List>
      <SimpleGrid columns={3} gap={2}>
        <WorkImage
          src="/images/works/normal-player_01.png"
          alt="normal-player"
        />
        <WorkImage
          src="/images/works/normal-player_02.png"
          alt="normal-player"
        />
        <WorkImage
          src="/images/works/normal-player_03.png"
          alt="normal-player"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
