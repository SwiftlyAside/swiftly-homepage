import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import thumbKibex from '../public/images/works/kibex.png'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem title="KIBEX" thumbnail={thumbKibex} id="beerexpo">
            KIBEX is a web application for managing the KIBEX (Korea
            International Beer Expo) website. It is a web application built with
            PHP.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="NormalPlayer"
            thumbnail={thumbKibex}
            id="normal-player"
          >
            NormalPlayer is an Android application for managing and playing the
            music.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
