import { Box, Container } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Cube from '../Cube';

const Main = () => {
  return (
    <Box as='main' pb={4}>
      <Header />
      <Container maxW='container.md' pt={20}>
        <Cube />

        <Outlet />

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
