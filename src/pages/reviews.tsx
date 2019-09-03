import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { AlbumRow } from '../components/album-row';
import { Input } from '../components/input';
import { Box } from '../components/box';
import { Text } from '../components/text';

const useFilter = (data, criteria: string) => {
  const [albums, setAlbums] = React.useState(data);

  React.useEffect(() => {
    const displayedAlbums = data.filter(
      ({ node }) =>
        node.albumName.toLowerCase().includes(criteria.toLowerCase()) ||
        node.artistName.toLowerCase().includes(criteria.toLowerCase())
    );
    setAlbums(displayedAlbums);
  }, [criteria, data]);

  return albums;
};

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

const Reviews: React.FC = () => {
  const data = useStaticQuery(query);
  const [filterValue, setFilterValue] = React.useState('');
  const albums = useFilter(data.allContentfulReview.edges, filterValue);

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
        <AlbumRow album={node} key={node.slug} />
      ))}
    </Layout>
  );
};

export default Reviews;
