import styled from 'styled-components';
import {
  color,
  typography,
  space,
  ColorProps,
  TypographyProps,
  SpaceProps,
} from 'styled-system';

type TextProps = SpaceProps &
  ColorProps &
  TypographyProps & {
    bold?: boolean;
    italic?: boolean;
    align?: 'center' | 'right' | 'left';
  };

export const Text = styled.div<TextProps>`
  ${color}
  ${space}
  ${typography}
  font-weight: ${({ bold, theme }) =>
    bold ? theme.font.weight.bold : theme.font.weight.normal};
  text-align: ${({ align }) => (align ? align : 'left')};
  font-style: ${({ italic }) => italic ? 'italic' : 'inherit'};
`;

export const Span = Text.withComponent('span');
export const A = Text.withComponent('a');
export const P = Text.withComponent('p');
export const H1 = Text.withComponent('h1');
export const H2 = Text.withComponent('h2');
