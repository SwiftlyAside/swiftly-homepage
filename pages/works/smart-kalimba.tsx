import Layout from '../../components/layouts/article'
import {
  Badge,
  Button,
  Container,
  Icon,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="스마트칼림바">
    <Container maxW="container.lg">
      <Title>
        스마트칼림바 <Badge>2021-2023</Badge>
      </Title>
      <P>스마트칼림바는 칼림바 튜닝을 도와주는 모바일 애플리케이션입니다.</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>스마트칼림바 Android/iOS 버전 유지보수</ListItem>
        <ListItem>공통</ListItem>
        <UnorderedList>
          <ListItem>튜닝가능 음계 범위 확장 (17 to 23)</ListItem>
          <ListItem>사용자 통계 분석 및 오류추적을 위한 Firebase 연동</ListItem>
          <ListItem>전면광고 추가를 위한 Admob 연동</ListItem>
          <ListItem>영어 지원 추가</ListItem>
        </UnorderedList>
        <ListItem>Android</ListItem>
        <UnorderedList>
          <ListItem>사운드 및 진동효과 관리 클래스 구현</ListItem>
          <ListItem>
            AsyncTask Deprecation 대응 - Pitch 탐지 클래스 재구현
          </ListItem>
          <ListItem>Google Billing Library 5.0.0 업데이트</ListItem>
        </UnorderedList>
        <ListItem>iOS</ListItem>
        <UnorderedList>
          <ListItem>오디오 라이브러리 교체 (EZAudio to AudioKit)</ListItem>
          <ListItem>
            Pitch 탐지 클래스를 ObservableObject 형태로 재구현
          </ListItem>
          <ListItem>
            SafeArea 이탈시 뷰가 잘리는 문제를 해결하기 위한 레이아웃 재구성
          </ListItem>
        </UnorderedList>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android/iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Android(Java, Kotlin), iOS(Swift)</span>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link
            href="https://apps.apple.com/us/app/%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%B9%BC%EB%A6%BC%EB%B0%94/id1502552712"
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
            href="https://play.google.com/store/apps/details?id=com.cookandroid.tuner"
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
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/smart-kalimba_02.png"
          alt="smart-kalimba"
        />
        <WorkImage
          src="/images/works/smart-kalimba_01.png"
          alt="smart-kalimba"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
