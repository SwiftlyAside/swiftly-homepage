import Logo from './logo'
import Link from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link as ChakraLink,
  LinkProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

type LinkItemProps = LinkProps & {
  href: string
  path: string
  _target?: string
  children: React.ReactNode
}

const LinkItem = ({
  href,
  path,
  _target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
  return (
    <Link href={href} passHref>
      <ChakraLink
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target ? _target : undefined}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}

type NavbarProps = {
  path: string
}

const Navbar = ({ path, ...props }: NavbarProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            href="https://github.com/SwiftlyAside/swiftly-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} qlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link href="/" passHref>
                  <MenuItem as={ChakraLink}>About</MenuItem>
                </Link>
                <Link href="/works" passHref>
                  <MenuItem as={ChakraLink}>Works</MenuItem>
                </Link>
                <Link href="/posts" passHref>
                  <MenuItem as={ChakraLink}>Posts</MenuItem>
                </Link>
                <MenuItem
                  as={ChakraLink}
                  href="https://github.com/SwiftlyAside/swiftly-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
