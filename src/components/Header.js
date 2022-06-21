import {
  Box,
  useColorModeValue,
  Container,
  Flex,
  Heading,
  Stack,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import React from 'react';
import Logo from './Logo';
import { IoLogoGithub } from 'react-icons/io5';
import ThemeToggleButton from './theme-toggle-button';
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ children, to, as, target, ...props }) => {
  return (
    <Link
      as={as}
      to={to}
      target={target}
      _activeLink={{ bg: '#88ccca' }}
      _focus={{ boxShadow: 'outline' }}
      transition='all 0.2s'
      p={2}
      {...props}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <Box
      as='header'
      position='fixed'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem to='/works' as={NavLink}>
            Works
          </LinkItem>
          <LinkItem to='/skills' as={NavLink}>
            Skills
          </LinkItem>
          <LinkItem
            target='_blank'
            href='https://github.com/thinh19981998/my-porfolio'
            display='inline-flex'
            alignItems='center'
          >
            <Flex gap={1}>
              <IoLogoGithub />
              Source
            </Flex>
          </LinkItem>
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <ReactLink to='/'>
                  <MenuItem as={Link}>About</MenuItem>
                </ReactLink>
                <ReactLink to='/works'>
                  <MenuItem as={Link}>Works</MenuItem>
                </ReactLink>
                <ReactLink to='/skills'>
                  <MenuItem as={Link}>Skills</MenuItem>
                </ReactLink>
                <MenuItem
                  as={Link}
                  href='https://github.com/thinh19981998/my-porfolio'
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
