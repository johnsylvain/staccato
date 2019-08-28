import styled, { DefaultTheme } from 'styled-components';

type TextProps = {
  bold?: boolean;
  size?: keyof DefaultTheme['font']['size'];
  color?: keyof DefaultTheme['color'];
  align?: 'center' | 'right' | 'left';
};

export const Text = styled.div<TextProps>`
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.text};
  font-size: ${({ size, theme }) =>
    size ? theme.font.size[size] : theme.font.size.md};
  font-weight: ${({ bold, theme }) =>
    bold ? theme.font.weight.bold : theme.font.weight.normal};
  text-align: ${({ align }) => (align ? align : 'left')};
`;
