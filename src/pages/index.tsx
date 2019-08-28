import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text } from '../components/text';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Text size="lg" bold align="center">
        {data.site.siteMetadata.description}
      </Text>
    </Layout>
  );
};

export default IndexPage;
