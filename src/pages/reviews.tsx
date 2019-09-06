import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { AlbumRow } from '../components/album-row';
import { Text } from '../components/text';
import styled from 'styled-components';

const query = graphql`
  query {
    allContentfulReview(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          albumName
          artistName
          rating
          slug
          coverArt {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.spacing.md}
`

const Reviews: React.FC = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="reviews" />
      <Text my={5} fontSize={4} bold align="center">
        All reviews.
      </Text>
      <Grid>
        {data.allContentfulReview.edges.map(({ node }) => (
          <AlbumRow album={node} key={node.slug} />
        ))}
      </Grid>
    </Layout>
  );
};

export default Reviews;
