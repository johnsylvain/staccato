import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text, Span, A } from '../components/text';
import { Box, Flex } from '../components/box';
import { renderRichText } from '../util/rich-text';

const Card = styled(Box)`
  background: rgba(255, 250, 250, 0.5);
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  top: -70px;
  position: relative;
  margin-bottom: -70px;
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

const FullReview: React.FC<{ album: any }> = ({ album }) => {
  return (
    <Card mt={5} p={4} width={1}>
      <Flex>
        <Box width={[1, 1, 1 / 3]}>
          <ImageWrapper>
            <Image fluid={album.coverArt.fluid}></Image>
          </ImageWrapper>
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
                {album.albumName}
              </Text>
              <Text mb={2}>by {album.artistName}</Text>
            </Box>
            <ReviewBadge>
              <Text bold>{album.rating}</Text>
            </ReviewBadge>
          </Flex>
          <Text fontSize={1} color="subtext">
            {album.label} <Span mx={1}>-</Span> {album.releaseDate}
          </Text>
          <Box py={3} flex="1 1 auto">
            {renderRichText(album.body.json)}
          </Box>

          <Flex justifyContent="space-between" alignItems="flex-end">
            <div>
              <Text fontSize={1} color="subtext" mb={1}>
                written by {album.author.name}
              </Text>
              <Text fontSize={1} color="subtext">
                {album.createdAt}
              </Text>
            </div>
            <A
              href={album.spotify}
              target="_blank"
              bold
              color="spotify"
              fontSize={1}
            >
              Listen on Spotify
            </A>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

const Review: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.contentfulReview.albumName} />
      <FullReview album={data.contentfulReview} />
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
      spotify
    }
  }
`;

export default Review;
