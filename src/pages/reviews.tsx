import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { AlbumRow } from '../components/album-row';
import { Input } from '../components/input';
import { Box } from '../components/box';
import { Text } from '../components/text';

const Reviews: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
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

  const [albums, setAlbums] = React.useState(data.allContentfulReview.edges);
  const [filterValue, setFilterValue] = React.useState('');

  React.useEffect(() => {
    const displayedAlbums = data.allContentfulReview.edges.filter(
      ({ node }) =>
        node.albumName.toLowerCase().includes(filterValue.toLowerCase()) ||
        node.artistName.toLowerCase().includes(filterValue.toLowerCase())
    );
    setAlbums(displayedAlbums);
  }, [filterValue, data]);

  return (
    <Layout>
      <SEO title="reviews" />
      <Text my={5} fontSize={4} bold align="center">
        All reviews.
      </Text>
      <Box my={5}>
        <Input
          type="text"
          value={filterValue}
          onChange={event => setFilterValue(event.target.value)}
          placeholder="Search for a review"
        />
      </Box>
      <Text fontSize={2} bold mb={3}>
        showing {albums.length} of {data.allContentfulReview.edges.length}
      </Text>
      {albums.map(({ node }) => (
        <AlbumRow album={node} />
      ))}
    </Layout>
  );
};

export default Reviews;
