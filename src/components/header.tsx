import * as React from 'react';
import { Nav, NavItem } from './nav';

type HeaderProps = { siteTitle: string };

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <Nav>
      <NavItem to="/" brand>
        {siteTitle}
      </NavItem>
      <NavItem to="/reviews">reviews</NavItem>
      <NavItem to="/about">about</NavItem>
    </Nav>
  </header>
);
