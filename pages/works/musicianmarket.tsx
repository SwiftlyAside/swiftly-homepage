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
  <Layout title="뮤지션마켓">
    <Container maxW="container.lg">
      <Title>
        뮤지션마켓 <Badge>2021-2023</Badge>
      </Title>
      <P>뮤지션마켓 웹사이트</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>고도몰(PHP) 기반 웹사이트 유지보수</ListItem>
        <br />
        <ListItem>
          정산 대시보드 성능개선 <Badge>2023</Badge>
        </ListItem>
        <UnorderedList>
          <ListItem>정산관련 테이블 누락된 인덱스 확인 및 추가</ListItem>
          <ListItem>표시속도 30초 to 1초 (30배 향상)</ListItem>
          <Meta>참고</Meta>
          <Link href=" https://swiftlyaside.tistory.com/4">
            MySQL 인덱스 최적화 사례
          </Link>
        </UnorderedList>
        <br />
        <br />
        <ListItem>
          풀스코어 아티스트 픽 연계용 API개발 <Badge>2022</Badge>
        </ListItem>
        <UnorderedList>
          <ListItem>발급된 상품링크 조회 (관리자용)</ListItem>
          <ListItem>사용자에게 표시할 상품링크 조회</ListItem>
        </UnorderedList>
        <br />
        <ListItem>
          앰버서더 기능개선 (리뉴얼) <Badge>2021-2022</Badge>
        </ListItem>
        <UnorderedList>
          <ListItem>앰버서더 대시보드 추가</ListItem>
          <ListItem>상품별 할인링크 발급기능 추가</ListItem>
          <UnorderedList>
            <ListItem>
              할인링크를 통해 구입시 앰버서더에게 상품대비 일정 비율만큼의 수익
              지급
            </ListItem>
          </UnorderedList>
        </UnorderedList>
        <br />
        <ListItem>
          악기추천 챗봇서비스 개발 <Badge>2021</Badge>
        </ListItem>
        <UnorderedList>
          <ListItem>단비Ai로 프론트엔드 생성</ListItem>
          <ListItem>요구사항에 맞는 추천상품 요청 API개발</ListItem>
          <ListItem>현재 서비스종료</ListItem>
        </UnorderedList>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP7, godomall, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://musicianmarket.co.kr">뮤지션마켓</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/musicianmarket.png" alt="뮤지션마켓" />
    </Container>
  </Layout>
)

export default Work
