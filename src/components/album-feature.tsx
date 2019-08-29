import * as React from 'react';
import styled from 'styled-components';
import { Text } from './text';

type AlbumFeatureProps = {
  album: any;
};

const Image = styled.div<{ src: string }>`
  width: 100%;
  padding-bottom: 100%;
  background: url(${props => props.src});
  background-size: cover;
`;

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  background-color: #f3f0ed;
`;

const AlbumDetails = styled.div`
  padding: ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewBadge = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 10px;
  background: #ece7e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlbumFeature: React.FC<AlbumFeatureProps> = ({ album }) => {
  return (
    <Container>
      <Image src={`http:${album.coverArt.file.url}`} />
      <AlbumDetails>
        <div>
          <Text bold fontSize={3} mb={1}>
            {album.albumName}
          </Text>
          <Text>by {album.artistName}</Text>
        </div>
        <ReviewBadge>
          <Text bold fontSize={3}>
            {album.rating}
          </Text>
        </ReviewBadge>
      </AlbumDetails>
    </Container>
  );
};
