import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, NavItem } from './nav';
import { Flex, Box } from './box';
import { Typeahead } from './typeahead';
import { Text } from './text';
import { Link } from './link';

const query = graphql`
  query {
    allContentfulReview {
      edges {
        node {
          albumName
          artistName
          slug
        }
      }
    }
  }
`;

type HeaderProps = { siteTitle: string };

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const data = useStaticQuery(query);

  return (
    <header>
      <Flex alignItems="center">
        <Box flex="1 1 auto">
          <Nav>
            <NavItem to="/" brand>
              {siteTitle}
            </NavItem>
            <NavItem to="/reviews">reviews</NavItem>
            <NavItem to="/about">about</NavItem>
          </Nav>
        </Box>
        <Box width={300}>
          <Typeahead
            placeholder="Search for a review"
            options={data.allContentfulReview.edges}
            filterBy={(option, value) =>
              option.node.artistName
                .toLowerCase()
                .includes(value.toLowerCase()) ||
              option.node.albumName.toLowerCase().includes(value.toLowerCase())
            }
          >
            {(option: any) => (
              <Box p={3} key={option.node.slug}>
                <Link to={`/${option.node.slug}`}>
                  <Text bold mb={1} color="text">
                    {option.node.albumName}
                  </Text>
                  <Text color="text">by {option.node.artistName}</Text>
                </Link>
              </Box>
            )}
          </Typeahead>
        </Box>
      </Flex>
    </header>
  );
};
