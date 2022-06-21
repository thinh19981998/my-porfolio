import React from 'react';
import Layout from '../../components/layout/article';
import { Container, Heading, Divider, Flex } from '@chakra-ui/react';
import Paragraph from '../../components/paragraph';
import { SiReact, SiHtml5, SiCss3, SiNodedotjs } from 'react-icons/si';

const Skills = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' variant='section-title' fontSize={20} mb={4}>
          Skills
        </Heading>
        <Paragraph>
          Focuses on: Full-stack web development, with leaning towards Frontend
          development. Experienced in JavaScript, React/Redux, HTML5, CSS3,
          NodeJS/Express, Bootstrap/Material UI. I love working on new
          technologies and constantly enhancing my skill set. My goal is to use
          my skills to develop functional and appealing web-based applications
          with a focus on great user experience, speed, and efficiency.
        </Paragraph>

        <Flex mt={2} fontSize={40} gap={4} justify='center'>
          <SiHtml5 color='#F06529' />
          <SiCss3 color='#28A4D9' />
          <SiReact color='#5ED4F4' />
          <SiNodedotjs color='#7fc728' />
        </Flex>
        <Divider p={4} />
      </Container>
    </Layout>
  );
};

export default Skills;
