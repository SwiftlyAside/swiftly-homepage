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
  <Layout title="NormalPlayer">
    <Container maxW="container.lg">
      <Title>
        NormalPlayer <Badge>2017-Current</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="https://www.beerexpo.kr/design/default/img/main/logo.png"
          alt="logo"
        />
      </Center>
      <P>NormalPlayer</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
        <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
        <ListItem>
          簡単接続機能により、面倒な接続作業を自動で行います。
        </ListItem>
        <ListItem>
          一つのポート開放だけで、様々な通信が出来る強力なプロトコル。
        </ListItem>
        <ListItem>
          IM機能を装備しています。会話中に写真を表示したりもできます。
        </ListItem>
        <ListItem>
          ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。
        </ListItem>
        <ListItem>MSN/Windowsメッセンジャーからの招待で接続できます。</ListItem>
        <ListItem>
          画面転送機能で、相手に自分のデスクトップを見せることが出来ます。
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://beerexpo.kr">Coming soon</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kibex.png" alt="kibex" />
    </Container>
  </Layout>
)

export default Work
