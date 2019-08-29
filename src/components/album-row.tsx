import * as React from 'react';
import styled from 'styled-components';
import { Text } from './text';

type AlbumRowProps = {
  album: any;
};

const AlbumRowContainer = styled.div`
  border-radius: 10px;
  padding: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;

  &:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.06);
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

export const AlbumRow: React.FC<AlbumRowProps> = ({ album }) => {
  return (
    <AlbumRowContainer>
      <Image src={album.coverArt.file.url} />
      <div>
        <Text bold mb={1}>
          {album.albumName}
        </Text>
        <Text>by {album.artistName}</Text>
      </div>
    </AlbumRowContainer>
  );
};
