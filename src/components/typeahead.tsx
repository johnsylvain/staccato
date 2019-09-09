import * as React from 'react';
import styled from 'styled-components';
import { Input } from './input';
import { Text } from './text';
import { Search } from './icon';
import { Dropdown, DropdownContent } from './dropdown';

type TypeaheadProps = React.HTMLAttributes<HTMLInputElement> & {
  options: any[];
  filterBy: (option: any, value: string) => boolean;
  children: (option: any) => React.ReactNode;
};

const TypeaheadWrapper = styled.div`
  position: relative;
  perspective: 1000px;
  z-index: 9000;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
  font-size: 16px;
  color: ${props => props.theme.colors.subtext};
  opacity: 0.8;
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
      <Dropdown isOpen={active && !!value.length}>
        <InputWrapper>
          <Input
            ref={inputRef}
            small
            value={value}
            onChange={event => setValue(event.target.value)}
            onClick={() => setActive(true)}
            style={{ paddingLeft: 40 }}
            {...rest}
          />
          <InputIcon />
        </InputWrapper>
        <DropdownContent>
          {filteredOptions.length ? (
            filteredOptions.slice(0, 3).map(option => children(option))
          ) : (
              <Text p={3} align="center" color="subtext">
                No reviews found.
                </Text>
            )}
        </DropdownContent>
      </Dropdown>
    </TypeaheadWrapper>
  );
};
