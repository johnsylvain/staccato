import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { useMediaQuery } from '../hooks/useMediaQuery';

type TiltProps = {
  [prop: string]: any;
};

const Container = styled.div`
  pointer-events: none;
`;

export const Tilt: React.FC<TiltProps> = ({ children }) => {
  const isMediumScreen = useMediaQuery('md');
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }));
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <animated.div
      onMouseMove={(event: React.MouseEvent) => {
        if (!isMediumScreen) return;

        const target = event.target as HTMLDivElement;
        set({
          xys: [
            -(event.pageY - target.offsetTop - target.clientHeight / 2) / 50,
            (event.pageX - target.offsetLeft - target.clientWidth / 2) / 50,
            1.05,
          ],
        });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      onMouseDown={() => isMediumScreen && set({ xys: [0, 0, 0.98] })}
      style={{
        //@ts-ignore
        transform: props.xys.interpolate(trans),
      }}
    >
      <Container>{children}</Container>
    </animated.div>
  );
};
