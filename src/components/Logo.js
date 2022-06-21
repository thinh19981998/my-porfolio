import React from 'react';
import styled from '@emotion/styled';
import { Text, Image, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 400ms ease;
  }
  &:hover img {
    transform: rotate(180deg) scale(0.95);
  }
`;

const Logo = () => {
  const logo = '/images/header_logo.svg';
  return (
    <Link as={ReactLink} to='/' _hover='none'>
      <LogoBox>
        <Image src={logo} alt='Logo' w={38} h={34} />
        <Text pl={1} fs={18}>
          Thinh Doan
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
