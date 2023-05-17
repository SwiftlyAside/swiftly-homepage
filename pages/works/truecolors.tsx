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
import { IoLogoSteam } from 'react-icons/io5'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Truecolors">
    <Container maxW="container.lg">
      <Title>
        Truecolors <Badge>2018-2019</Badge>
      </Title>
      <P>Truecolors는 Unreal Engine 4 기반 3D 스릴러 게임입니다.</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Truecolors PC 버전 개발</ListItem>
        <br />
        <ListItem>프로젝트 운영 (프로젝트 관리, 일정 관리, 팀원 관리)</ListItem>
        <ListItem>시스템 구현 (Blueprint, C++)</ListItem>
        <UnorderedList>
          <ListItem>인벤토리 시스템</ListItem>
          <ListItem>
            UI 시스템 (메인메뉴, 인게임 맵 UI, 인벤토리 UI, 플레이어 상태 UI)
          </ListItem>
          <ListItem>스팀 업적시스템 지원을 위한 Steamworks 연동</ListItem>
        </UnorderedList>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unreal Engine, C++, Blueprint, Steamworks</span>
        </ListItem>
        <ListItem>
          <Meta>Steam</Meta>
          <Link
            href="https://store.steampowered.com/app/1013200/Truecolors/"
            isExternal
          >
            <Button
              variant="ghost"
              colorScheme="cyan"
              leftIcon={<Icon as={IoLogoSteam} />}
              rightIcon={<ExternalLinkIcon mx="2px" />}
            ></Button>
          </Link>
        </ListItem>
      </List>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/truecolors_1.jpg" alt="truecolors_1" />
        <WorkImage src="/images/works/truecolors_2.jpg" alt="truecolors_2" />
        <WorkImage src="/images/works/truecolors_3.jpg" alt="truecolors_3" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
