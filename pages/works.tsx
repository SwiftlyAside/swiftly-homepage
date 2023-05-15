import Layout from '../components/layouts/article'
import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import thumbKibex from '../public/images/works/kibex.png'
import thumbNormalPlayer from '../public/images/works/normal-player_01.png'
import thumbPlayKalimba from '../public/images/works/play-kalimba_eyecatch.png'
import thumbSmartKalimba from '../public/images/works/smart-kalimba_eyecatch.png'
import thumbSeochocf from '../public/images/works/seochocf_eyecatch.png'
import thumbSunsa from '../public/images/works/sunsa_eyecatch.png'
import thumbWiki2 from '../public/images/works/wiki2_eyecatch.png'
import thumbMusicianmarket from '../public/images/works/musicianmarket_eyecatch.png'
import thumbFullscore from '../public/images/works/fullscore_eyecatch.png'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            title="풀스코어"
            thumbnail={thumbFullscore}
            id="fullscore"
          >
            풀스코어는 아티스트가 직접 제작한 콘텐츠를 공유하고 설정한 가격으로
            판매하는 전문 플랫폼입니다.
          </WorkGridItem>
        </Section>
        {/*<Section>*/}
        {/*  <WorkGridItem title="포포키" thumbnail={thumbPlayKalimba} id="popoki">*/}
        {/*    포포키는 뮤지션마켓의 악기추천 챗봇 서비스입니다.*/}
        {/*  </WorkGridItem>*/}
        {/*</Section>*/}
        <Section>
          <WorkGridItem
            title="뮤지션마켓"
            thumbnail={thumbMusicianmarket}
            id="musicianmarket"
          >
            뮤지션마켓은 개인간의 중고 악기 거래(C2C) 플랫폼 위에 브랜드
            리퍼비쉬드 악기 거래 플랫폼(B2C)을 더한 새로운 마켓 서비스입니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="플레이칼림바"
            thumbnail={thumbPlayKalimba}
            id="play-kalimba"
          >
            PlayKalimba는 칼림바 연주 교육목적으로 개발된 리듬액션게임입니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="스마트칼림바"
            thumbnail={thumbSmartKalimba}
            id="smart-kalimba"
          >
            SmartKalimba는 칼림바 튜닝을 도와주는 모바일 애플리케이션입니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="위키위키 (웹사이트)"
            thumbnail={thumbWiki2}
            id="wiki2"
          >
            위키위키주식회사의 웹사이트입니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem title="KIBEX" thumbnail={thumbKibex} id="beerexpo">
            KIBEX (Korea International Beer Expo) 웹사이트입니다.
          </WorkGridItem>
        </Section>
        {/*<Section>*/}
        {/*  <WorkGridItem title="경기연구원" thumbnail={thumbGri} id="gri">*/}
        {/*    경기연구원 웹사이트입니다.*/}
        {/*  </WorkGridItem>*/}
        {/*</Section>*/}
        <Section>
          <WorkGridItem
            title="서울암사동유적"
            thumbnail={thumbSunsa}
            id="sunsa"
          >
            서울암사동유적 웹사이트입니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="서초문화재단"
            thumbnail={thumbSeochocf}
            id="seochocf"
          >
            서초문화재단 웹사이트입니다.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Old Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            title="Truecolors"
            thumbnail={thumbPlayKalimba}
            id="truecolors"
          >
            Truecolors is a horror game for pc. It was built with Unreal Engine
            4.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="NormalPlayer"
            thumbnail={thumbNormalPlayer}
            id="normal-player"
          >
            NormalPlayer는 음악을 관리하고 재생하는 안드로이드
            애플리케이션입니다.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
