import React from 'react';
import {
  Container,
  Heading,
  Text,
  Divider,
  Box,
  Link,
  Button,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import Layout from '../components/layout/article';

const NoMatch = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h1'>Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align='center'>
          <Link as={ReactLink} to='/'>
            <Button colorScheme='teal'>Return to home</Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default NoMatch;
