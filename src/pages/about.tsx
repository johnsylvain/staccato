import * as React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text, P, H2 } from '../components/text';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allContentfulAuthor(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
const About: React.FC = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="about" />
      <Text my={5} fontSize={4} bold align="center">
        About.
      </Text>
      <P mb={4}>staccato is a music site founded in 2019.</P>
      <H2 fontSize={2} bold mb={2}>
        writers
      </H2>

      {data.allContentfulAuthor.edges.map(({ node }) => (
        <P key={node.name} mb={1}>
          {node.name}
        </P>
      ))}
    </Layout>
  );
};

export default About;
