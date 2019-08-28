import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  padding: ${props => props.theme.spacing.lg} 0;

  > ul {
    display: flex;
    align-items: baseline;
  }
`;

const StyledNavItem = styled.li<{ brand?: boolean }>`
  font-size: ${props =>
    props.brand ? props.theme.font.size.lg : props.theme.font.size.md};
  font-weight: ${props =>
    props.brand
      ? props.theme.font.weight.bold
      : props.theme.font.weight.normal};
  margin-right: ${props => props.theme.spacing.lg};

  > * {
    text-decoration: none;
    color: inherit;
  }
`;

export const Nav: React.FC = ({ children }) => {
  return (
    <StyledNav>
      <ul>{children}</ul>
    </StyledNav>
  );
};

export const NavItem: React.FC<{ to: string; brand?: boolean }> = ({
  to,
  brand,
  children,
}) => {
  return (
    <StyledNavItem brand={brand}>
      <Link to={to}>{children}</Link>
    </StyledNavItem>
  );
};
