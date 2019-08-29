import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text } from '../components/text';

const Review: React.FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.contentfulReview.albumName} />
      <Text my={5} fontSize={4} bold align="center">
        {data.contentfulReview.albumName}
      </Text>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    contentfulReview(slug: { eq: $pathSlug }) {
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
`;

export default Review;
