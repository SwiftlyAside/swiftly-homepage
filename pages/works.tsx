import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import thumbKibex from '../public/images/works/kibex.png'
import thumbNormalPlayer from '../public/images/works/normal-player_01.png'
import thumbPlayKalimba from '../public/images/works/play-kalimba_icon.png'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section>
          <WorkGridItem
            title="NormalPlayer"
            thumbnail={thumbNormalPlayer}
            id="normal-player"
          >
            NormalPlayer is an Android application for managing and playing the
            music.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem title="KIBEX" thumbnail={thumbKibex} id="beerexpo">
            KIBEX is a web application for managing the KIBEX (Korea
            International Beer Expo) website. It is a web application built with
            PHP.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="PlayKalimba"
            thumbnail={thumbPlayKalimba}
            id="play-kalimba"
          >
            Play Kalimba is a rhythm game for mobile phones. It was built with
            Unity.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
