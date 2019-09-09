import { useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as T;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      handler(event);
    };

    ['click', 'touchstart'].forEach(method => {
      window.addEventListener(method, listener);
    });

    return () => {
      ['click', 'touchstart'].forEach(method => {
        window.removeEventListener(method, listener);
      });
    };
  }, [ref]);
};
