import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../../components/section';
import React from 'react';
import Layout from '../../components/layout/article';
import { WorkGridItem } from '../../components/grid-item';

const Work = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' variant='section-title' fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              href='https://happy-camp.herokuapp.com/'
              title='happy-camp'
              thumbnail='images/happy-camp.png'
            >
              A place to search for Camp site in VietName and share your
              favavorite camps.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              href='https://cat-wiki-mu.vercel.app/'
              title='cat-wiki'
              thumbnail='images/cat-wiki.png'
            >
              Seacrh and share your favorite cats.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              href='https://thinh19981998.github.io/Natours/'
              title='The Landing page'
              thumbnail='images/landing-page.png'
            >
              Landing page for a travel agency.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              href='https://jobs-search.vercel.app/'
              thumbnail='images/job.png'
              title='Job search page'
            >
              Find your jobs.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
