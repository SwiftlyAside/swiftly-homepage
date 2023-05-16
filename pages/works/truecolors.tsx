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
        <ListItem>Blueprint, C++을 이용한 UI 시스템 개발</ListItem>
        <ListItem>스팀 업적시스템 지원을 위한 Steamworks 연동</ListItem>
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
    </Container>
  </Layout>
)

export default Work
