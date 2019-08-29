import * as React from 'react';
import styled from 'styled-components';
import { Text } from './text';
import { Link } from 'gatsby';

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

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 512 512"
  >
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
  </svg>
);

export const AlbumRow: React.FC<AlbumRowProps> = ({ album }) => {
  console.log(album);
  return (
    <AlbumRowContainer to={album.slug}>
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
