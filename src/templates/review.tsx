import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text, Span } from '../components/text';
import { Box, Flex } from '../components/box';
import { Tilt } from '../components/tilt';
import { renderRichText } from '../util/rich-text';
import { createTwitterLink, createFacebookLink } from '../util/shareable-links';
import { ShareButton } from '../components/share-button';

const Card = styled(Box)`
  background: rgba(255, 250, 250, 0.5);
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  top: -70px;
  margin-bottom: -70px;

  @media (min-width: ${props => props.theme.breakpoint.md}px) {
    top: 0px;
    margin-bottom: 0px;
  }
`;

const ReviewBadge = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullReview: React.FC<{ review: any }> = ({ review }) => {
  const socialLinks = [
    createTwitterLink(review.artistName, review.albumName, review.slug),
    createFacebookLink(review.slug),
    review.spotify,
  ];
  return (
    <Card mt={5} p={[3, 4]} width={1}>
      <Flex>
        <Box width={[1, 1, 1 / 3]}>
          <Tilt>
            <ImageWrapper>
              <Image fluid={review.coverArt.fluid}></Image>
            </ImageWrapper>
          </Tilt>
        </Box>
        <Flex
          flexDirection="column"
          width={[1, 1, 2 / 3]}
          pl={[0, 0, 4]}
          mt={[4, 4, 0]}
        >
          <Flex>
            <Box flex="1 1 auto">
              <Text fontSize={4} bold mb={1}>
                {review.albumName}
              </Text>
              <Text mb={2}>by {review.artistName}</Text>
            </Box>
            <ReviewBadge>
              <Text bold fontSize={3}>
                {review.rating}
              </Text>
            </ReviewBadge>
          </Flex>
          <Text fontSize={1} color="subtext">
            {review.label} <Span mx={1}>-</Span> {review.releaseDate}
          </Text>
          <Box py={3} flex="1 1 auto">
            {renderRichText(review.body.json)}
          </Box>

          <Flex justifyContent="space-between" alignItems="flex-end">
            <div>
              <Text fontSize={1} color="subtext" mb={1}>
                written by {review.author.name}
              </Text>
              <Text fontSize={1} color="subtext">
                {review.createdAt}
              </Text>
            </div>
            <ShareButton links={socialLinks}></ShareButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

const Review: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.contentfulReview.albumName}
        description={`Review of ${data.contentfulReview.albumName} by ${data.contentfulReview.artistName}`}
        image={'http:' + data.contentfulReview.coverArt.fluid.src}
      />
      <FullReview review={data.contentfulReview} />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    contentfulReview(slug: { eq: $pathSlug }) {
      albumName
      artistName
      author {
        name
      }
      body {
        json
      }
      coverArt {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyContentfulFluid
        }
      }
      createdAt(formatString: "MMMM DD, YYYY")
      label
      rating
      releaseDate(formatString: "YYYY")
      slug
      spotify
    }
  }
`;

export default Review;
