import * as React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { Input } from './input';
import { Text } from './text';

type TypeaheadProps = React.HTMLAttributes<HTMLInputElement> & {
  options: any[];
  filterBy: (option: any, value: string) => boolean;
  children: (option: any) => React.ReactNode;
};

const TypeaheadWrapper = styled.div`
  position: relative;
  perspective: 1000px;
`;

const TypeaheadDropdown = styled(animated.div)`
  position: absolute;
  z-index: 1000;
  top: 120%;
  background: white;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  transform-origin: top center;
`;

export const Typeahead: React.FC<TypeaheadProps> = ({
  options,
  filterBy,
  children,
  ...rest
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>('');
  const [active, setActive] = React.useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = React.useState<any>(options);
  const transitions = useTransition(active && !!value.length, null, {
    from: { opacity: 0, transform: 'rotateX(-20deg)' },
    enter: { opacity: 1, transform: 'rotateX(0deg)' },
    leave: { opacity: 0, transform: 'rotateX(-20deg)' },
  });

  React.useEffect(() => {
    setFilteredOptions(
      options.filter(option => filterBy(option, value.trim()))
    );
  }, [value, options]);

  React.useEffect(() => {
    const handler = (event: any) => {
      if (!inputRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    ['click', 'touchstart'].forEach(method => {
      window.addEventListener(method, handler);
    });

    return () => {
      ['click', 'touchstart'].forEach(method => {
        window.removeEventListener(method, handler);
      });
    };
  }, [inputRef]);

  return (
    <TypeaheadWrapper>
      <Input
        ref={inputRef}
        small
        value={value}
        onChange={event => setValue(event.target.value)}
        onClick={() => setActive(true)}
        {...rest}
      />
      {transitions.map(
        ({ props, key, item }) =>
          item && (
            <TypeaheadDropdown style={props} key={key}>
              {filteredOptions.length ? (
                filteredOptions.slice(0, 5).map(option => children(option))
              ) : (
                <Text p={3} align="center" color="subtext">
                  No reviews found.
                </Text>
              )}
            </TypeaheadDropdown>
          )
      )}
    </TypeaheadWrapper>
  );
};
