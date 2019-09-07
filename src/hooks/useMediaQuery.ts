import { useState, useEffect } from 'react';
import { theme } from '../config/theme';
import { DefaultTheme } from 'styled-components';

type BreakpointKeys = keyof DefaultTheme['breakpoint'];
type Breakpoints = { [key in BreakpointKeys]?: string };

const queries: Breakpoints = Object.keys(theme.breakpoint).reduce(
  (accumulator: Breakpoints, key: BreakpointKeys): Breakpoints => ({
    ...accumulator,
    [key]: `(min-width: ${theme.breakpoint[key]}px)`,
  }),
  {}
);

export function useMediaQuery(screenSize: BreakpointKeys): boolean {
  const query = queries[screenSize] || '(min-width: 0px)';

  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
