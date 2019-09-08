import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { ReviewTile } from '../components/review-tile';
import { Text } from '../components/text';
import { Grid } from '../components/grid';

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
            fluid(maxWidth: 50, maxHeight: 50) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

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
          <ReviewTile album={node} key={node.slug}></ReviewTile>
        ))}
      </Grid>
    </Layout>
  );
};

export default Reviews;
