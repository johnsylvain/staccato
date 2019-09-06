import * as React from 'react';
import styled from 'styled-components';
import { Text } from './text';
import { Link } from 'gatsby';
import { animated, useSpring } from 'react-spring';

type AlbumFeatureProps = {
  album: any;
};

const Image = styled.div<{ src: string }>`
  width: 100%;
  padding-bottom: 100%;
  background: url(${props => props.src});
  background-size: cover;
`;

const Container = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  background: rgba(255, 255, 255, 0.5);
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
  background: #ece7e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.05]
const trans = ([x, y, s]: number[]) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const AlbumFeature: React.FC<AlbumFeatureProps> = ({ album }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate((x, y, s) => trans([x, y, s])) }}
    >
      <Container to={`/${album.slug}`}>
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
    </animated.div>
  );
};
