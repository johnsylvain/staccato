import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { Header } from './header';
import { theme } from '../config/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background: linear-gradient(to right, ${props =>
      props.theme.color.offWhite}, ${props => props.theme.color.white});
    font-family: ${props => props.theme.font.family};
    color: ${props => props.theme.color.text};
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.lg}px;
  padding: 0 ${props => props.theme.spacing.md};
  margin: 0 auto;
`;

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} staccato</footer>
      </Container>
    </ThemeProvider>
  );
};
