import styled from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  flexbox,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export const Box = styled.div<SpaceProps & LayoutProps & FlexboxProps>`
  ${space}
  ${layout}
  ${flexbox}
`;

export const Flex = styled(Box)`
  display: flex;
`;
