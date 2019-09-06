import * as React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring'
import { Input } from './input';
import { Text } from './text';

type TypeaheadProps = React.HTMLAttributes<HTMLInputElement> & {
  options: any[];
  filterBy: (option: any, value: string) => boolean;
  children: (option: any) => React.ReactNode;
};

const TypeaheadWrapper = styled.div`
  position: relative;
`;

const TypeaheadDropdown = styled(animated.div)`
  position: absolute;
  top: 120%;
  background: white;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
`;

export const Typeahead: React.FC<TypeaheadProps> = ({
  options,
  filterBy,
  children,
  ...rest
}) => {
  const [value, setValue] = React.useState<string>('');
  const [filteredOptions, setFilteredOptions] = React.useState<any>(options);
  const transitions = useTransition(!!value.length, null, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  })

  React.useEffect(() => {
    setFilteredOptions(options.filter(option => filterBy(option, value)));
  }, [value, options]);

  return (
    <TypeaheadWrapper>
      <Input
        small
        value={value}
        onChange={event => setValue(event.target.value)}
        {...rest}
      />
      {transitions.map(({ props, key, item }) => item &&
        <TypeaheadDropdown style={props} key={key}>
          {filteredOptions.length ? (
            filteredOptions.slice(0, 5).map(option => children(option))
          ) : (
              <Text p={3} align="center" color="subtext">
                No reviews found.
            </Text>
            )}
        </TypeaheadDropdown>
      )}
    </TypeaheadWrapper>
  );
};
