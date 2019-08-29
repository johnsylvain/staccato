import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text } from '../components/text';
import { AlbumFeature } from '../components/album-feature';
import { Button } from '../components/button';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
      allContentfulReview {
        edges {
          node {
            albumName
            artistName
            rating
            coverArt {
              file {
                url
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
            <AlbumFeature album={node}></AlbumFeature>
          ))}
        </Grid>
      )}
      <Button>
        <Text bold>see more</Text>
      </Button>
    </Layout>
  );
};

export default IndexPage;
