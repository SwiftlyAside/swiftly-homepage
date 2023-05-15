import Layout from '../../components/layouts/article'
import {
  Badge,
  Button,
  Container,
  Icon,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="플레이칼림바">
    <Container maxW="container.lg">
      <Title>
        플레이칼림바 <Badge>2021-2022</Badge>
      </Title>
      <P>
        플레이칼림바는 칼림바 연주 교육목적으로 개발된 리듬액션게임
        어플리케이션입니다.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>플레이칼림바 Android/iOS 버전 개발</ListItem>
        <ListItem>게임 메인로직 구현</ListItem>
        <UnorderedList>
          <ListItem>
            Unity Addressable과 Unity CCD를 이용한 콘텐츠 배포
          </ListItem>
          <ListItem>Particle System을 활용한 이펙트 구현</ListItem>
          <ListItem>
            MIDI 콘텐츠 변환기는 Koreographer 에셋을 구매하여 활용
          </ListItem>
        </UnorderedList>
        <ListItem>
          Google Cloud Functions를 이용한 백엔스 기능 개발 (Runtime: Node.js)
        </ListItem>
        <UnorderedList>
          <ListItem>게임 플레이 기록 저장 및 불러오기</ListItem>
          <ListItem>구매/광고 시청 후 재화획득 처리</ListItem>
          <ListItem>회원 탈퇴</ListItem>
          <ListItem>회원 탈퇴 후 처리</ListItem>
        </UnorderedList>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity,C#,Node.js,Typescript</span>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link
            href="https://apps.apple.com/vn/app/%ED%94%8C%EB%A0%88%EC%9D%B4-%EC%B9%BC%EB%A6%BC%EB%B0%94/id1576151921"
            isExternal
          >
            <Button
              variant="ghost"
              colorScheme="cyan"
              leftIcon={<Icon as={IoLogoAppleAppstore} />}
              rightIcon={<ExternalLinkIcon mx="2px" />}
            ></Button>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.wikiwiki.smartkalimba"
            isExternal
          >
            <Button
              variant="ghost"
              colorScheme="cyan"
              leftIcon={<Icon as={IoLogoGooglePlaystore} />}
              rightIcon={<ExternalLinkIcon mx="2px" />}
            ></Button>
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
