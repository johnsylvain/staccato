import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Text, Span } from '../components/text';
import { Box, Flex } from '../components/box';

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: text => <Span bold>{text}</Span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

const Image = styled.div<{ src: string }>`
  border-radius: 10px;
  width: 100%;
  padding-bottom: 100%;
  background: url(${props => props.src});
  background-size: cover;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
`;

const ReviewBadge = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 10px;
  background: ${props => props.theme.colors.text};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullReview: React.FC<{ album: any }> = ({ album }) => {
  return (
    <Flex>
      <Box width={[1, 1, 1 / 4]}>
        <Image src={`http:${album.coverArt.file.url}`} />
      </Box>
      <Box px={4} width={[1, 1, 3 / 4]}>
        <Flex >
          <Box flex="1 1 auto">
            <Text fontSize={3} bold mb={1}>
              {album.albumName}
            </Text>
            <Text>by {album.artistName}</Text>
          </Box>
          <ReviewBadge>
            <Text bold>{album.rating}</Text>
          </ReviewBadge>
        </Flex>
        <Box py={3}>
          {documentToReactComponents(album.body.json, options)}
        </Box>
      </Box>
    </Flex>
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
      rating
      body {
        json
      }
      coverArt {
        file {
          url
        }
      }
    }
  }
`;

export default Review;
