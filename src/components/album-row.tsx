import * as React from 'react';
import styled from 'styled-components';
import { Text } from './text';
import { Link } from 'gatsby';
import { Arrow } from './icon';

type AlbumRowProps = {
  album: any;
};

const AlbumRowContainer = styled(Link)`
  display: block;
  border-radius: 10px;
  padding: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  & > svg {
    opacity: 0;
    transform: translateX(10px);
    transition: 0.2s ease;
  }

  &:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.06);
  }

  &:hover > svg {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Image = styled.div<{ src: string }>`
  width: 50px;
  height: 50px;
  background: url(${props => props.src});
  background-size: cover;
  border-radius: 5px;
  margin-right: ${props => props.theme.spacing.md};
`;

const AlbumRowContent = styled.div`
  flex-grow: 1;
`;

export const AlbumRow: React.FC<AlbumRowProps> = ({ album }) => {
  return (
    <AlbumRowContainer to={`/${album.slug}`}>
      <Image src={album.coverArt.file.url} />
      <AlbumRowContent>
        <Text bold mb={1}>
          {album.albumName}
        </Text>
        <Text>by {album.artistName}</Text>
      </AlbumRowContent>
      <Arrow />
    </AlbumRowContainer>
  );
};
