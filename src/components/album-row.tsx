import * as React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Text } from './text';
import { Link } from './link';
import { Tilt } from './tilt';

type AlbumRowProps = {
  album: any;
};

const AlbumRowContainer = styled.div`
  display: block;
  border-radius: 10px;
  padding: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.3);
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: ${props => props.theme.spacing.md};
`;

const AlbumRowContent = styled.div`
  flex-grow: 1;
`;

export const AlbumRow: React.FC<AlbumRowProps> = ({ album }) => {
  return (
    <Link to={`/${album.slug}`}>
      <Tilt>
        <AlbumRowContainer>
          <ImageWrapper>
            <Image fluid={album.coverArt.fluid} />
          </ImageWrapper>
          <AlbumRowContent>
            <Text bold mb={1}>
              {album.albumName}
            </Text>
            <Text>by {album.artistName}</Text>
          </AlbumRowContent>
        </AlbumRowContainer>
      </Tilt>
    </Link>
  );
};
