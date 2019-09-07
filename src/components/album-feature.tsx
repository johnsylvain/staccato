import * as React from 'react';
import styled from 'styled-components';
import { Text } from './text';
import { Link } from './link';
import { Tilt } from './tilt';
import Image from 'gatsby-image';

type AlbumFeatureProps = {
  album: any;
};

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  background: rgba(255, 255, 255, 0.4);
  transition: 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
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
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlbumFeature: React.FC<AlbumFeatureProps> = ({ album }) => {
  console.log(album.coverArt.fluid);
  return (
    <Link to={`/${album.slug}`}>
      <Tilt>
        <Container>
          <Image fluid={album.coverArt.fluid} />
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
      </Tilt>
    </Link>
  );
};
