import React from 'react';
import Layout from '../../components/layout/article';
import {
  Container,
  Box,
  useColorModeValue,
  List,
  ListItem,
  Link,
  Button,
} from '@chakra-ui/react';
import { Heading, Image } from '@chakra-ui/react';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import { BioSection, BioYear } from '../../components/bio';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { CgMail } from 'react-icons/cg';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          mb={6}
          p={3}
          textAlign='center'
          bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an indie app developer based in Vietnam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Doan Phu Thinh
            </Heading>
            <p>Software Engineer ( Web Developer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor='yellow.500'
              borderWidth={3}
              borderStyle='solid'
              w='100px'
              h='100px'
              display='inline-block'
              borderRadius='full'
              overflow='hidden'
            >
              <Image
                src='/images/avatar.jpg'
                alt='Profile image'
                borderRadius='full'
                width='100%'
                height='100%'
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            Thinh is a freelance and a full-stack developer based in VietNam
            with a passion for building digital services/stuff he wants. He has
            a knack for all things launching products, from planning and
            designing all the way to solving real-life problems with code. When
            not online, he loves playing games and hanging out with friends.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Dong Nai Province, Vietnam.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Engineer&apos;s Program in the University of
            Technology and Education (HCMUTE)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at MeU-solutions Company
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as a freelancer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/thinh19981998' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<IoLogoGithub />}
                >
                  @thinh19981998
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.facebook.com/profile.php?id=100025326254791'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<IoLogoFacebook />}
                >
                  @Doan Phu Thinh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.linkedin.com/in/th%E1%BB%8Bnh-%C4%91o%C3%A0n-ph%C3%BA-890a31212/'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Doan Phu Thinh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='mailto:dpthinh1508@gmail.com'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<CgMail />}
                >
                  @Doan Phu Thinh
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
