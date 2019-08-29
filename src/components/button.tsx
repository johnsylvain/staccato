import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const Button = styled.button<SpaceProps>`
  ${space}

  padding: ${props => props.theme.spacing.sm} ${props =>
  props.theme.spacing.xl};
  background: #f3f0ed;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-family: inherit;
  font-size: ${props => props.theme.font.size.md};
  outline: none;
  border:none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.09);
  }
`;
