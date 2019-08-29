import styled from 'styled-components';

export const Input = styled.input`
  font-size: inherit;
  background: rgba(0, 0, 0, 0.06);
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.font.weight.bold};
  border-radius: 10px;
  outline: none;
  border: none;
  padding: ${props => props.theme.spacing.md};
  width: 100%;
  opacity: 0.7;

  &:focus {
    opacity: 1;
  }
`;
