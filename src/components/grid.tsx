import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl} 0;

  @media (max-width: ${props => props.theme.breakpoint.md}px) {
    grid-template-columns: 1fr;
  }
`;
