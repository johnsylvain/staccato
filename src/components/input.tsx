import styled, { StyledProps, css } from 'styled-components';

type InputProps = { small?: boolean };

const small = (props: StyledProps<InputProps>) =>
  props.small &&
  css`
    padding: ${props => props.theme.spacing.sm}
      ${props => props.theme.spacing.md};
  `;

export const Input = styled.input.attrs({ type: 'text' })`
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

  ${small}

  &:focus {
    opacity: 1;
  }
`;
