import Link from 'next/link'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Global } from '@emotion/react'

type GridItemProps = {
  children: React.ReactNode
  href?: string
  title: string
  thumbnail: StaticImageData
}

type WorkGridItemProps = GridItemProps & {
  id: string
}

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href ?? '#'} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => (
  <Box>
    <Link href={`/works/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay as="div" href={`/work/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
    border-radius: 12px;
    }
    `}
  />
)
