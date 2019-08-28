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
    align?: 'center' | 'right' | 'left';
  };

export const Text = styled.div<TextProps>`
  ${color}
  ${space}
  ${typography}
  font-weight: ${({ bold, theme }) =>
    bold ? theme.font.weight.bold : theme.font.weight.normal};
  text-align: ${({ align }) => (align ? align : 'left')};
`;
