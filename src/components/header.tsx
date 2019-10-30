import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, NavItem } from './nav';
import { Flex, Box } from './box';
import { Typeahead } from './typeahead';
import { Text } from './text';
import { Link } from './link';
import { Menu } from './icon';
import { Dropdown, DropdownToggle, DropdownContent } from './dropdown';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { fuzzyMatch } from '../util/fuzzy-match';

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

const links = [
  { to: '/reviews', label: 'reviews' },
  { to: '/about', label: 'about' },
];

type HeaderProps = { siteTitle: string };

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const data = useStaticQuery(query);
  const isSmallScreen = useMediaQuery('md');

  return (
    <header>
      <Flex alignItems="center">
        <Box flex="1 1 auto">
          <Nav>
            <NavItem to="/" brand>
              {siteTitle}
            </NavItem>
            {isSmallScreen && (
              <>
                {links.map(link => (
                  <NavItem to={link.to} key={link.to}>
                    {link.label}
                  </NavItem>
                ))}
              </>
            )}
          </Nav>
        </Box>
        {!isSmallScreen && (
          <Dropdown>
            <DropdownToggle>
              <Menu></Menu>
            </DropdownToggle>
            <DropdownContent>
              {links.map(link => (
                <Link to={link.to}>
                  <Text bold p={2}>
                    {link.label}
                  </Text>
                </Link>
              ))}
            </DropdownContent>
          </Dropdown>
        )}
        {isSmallScreen && (
          <Box width={300}>
            <Typeahead
              placeholder="Search for a review"
              options={data.allContentfulReview.edges}
              filterBy={(option, value) =>
                fuzzyMatch(value, option.node.albumName) ||
                fuzzyMatch(value, option.node.artistName)
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
        )}
      </Flex>
    </header>
  );
};
