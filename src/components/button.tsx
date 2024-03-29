import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { Link } from 'gatsby';

export const Button = styled.button<SpaceProps>`
  ${space}

  padding: ${props => props.theme.spacing.sm} ${props =>
    props.theme.spacing.xl};
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  font-family: inherit;
  font-size: ${props => props.theme.font.size.md};
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  display: inline-block;
`;

export const ButtonLink = Button.withComponent(Link);
