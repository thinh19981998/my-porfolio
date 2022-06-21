import { Box, Text, LinkBox, Link, Image } from '@chakra-ui/react';

export const WorkGridItem = ({ children, href, title, thumbnail }) => (
  <Box w='100%' textAlign='center'>
    <Link href={href} target='_blank'>
      <LinkBox cursor='pointer'>
        <Image
          src={thumbnail}
          alt={title}
          className='grid-item-thumbnail'
          placeholder='blur'
        />
        {/* <Link as='a' href={href} target='_blank'> */}
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        {/* </Link> */}
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
);
