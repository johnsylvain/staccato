import { Link as BaseLink } from 'gatsby';
import styled from 'styled-components';

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;
