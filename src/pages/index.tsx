import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid } from '../components/grid';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text } from '../components/text';
import { ReviewFeature } from '../components/review-feature';
import { ButtonLink } from '../components/button';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
      allContentfulReview(sort: { order: DESC, fields: createdAt }, limit: 3) {
        edges {
          node {
            albumName
            artistName
            rating
            slug
            coverArt {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Text my={5} fontSize={4} bold align="center">
        {data.site.siteMetadata.description}
      </Text>
      {data.allContentfulReview.edges.length && (
        <Grid>
          {data.allContentfulReview.edges.slice(0, 3).map(({ node }) => (
            <ReviewFeature review={node} key={node.slug}></ReviewFeature>
          ))}
        </Grid>
      )}
      <ButtonLink to="/reviews">
        <Text bold>see more</Text>
      </ButtonLink>
    </Layout>
  );
};

export default IndexPage;
