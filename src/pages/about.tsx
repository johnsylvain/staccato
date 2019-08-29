import * as React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text } from '../components/text';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="about" />
      <Text my={5} fontSize={4} bold align="center">
        About.
      </Text>
    </Layout>
  );
};

export default About;
