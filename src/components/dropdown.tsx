import * as React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { useOutsideClick } from '../hooks/useOutsideClick';

type DropdownProps = {
  isOpen?: boolean;
};

type DropdownContext = {
  isOpen: boolean;
  toggle: () => void;
};

const DropdownContext = React.createContext<DropdownContext>({
  isOpen: false,
  toggle: () => { },
});

const DropdownContentWrapper = styled(animated.div)`
  position: absolute;
  top: 140%;
  right: 0;
  background: white;
  border-radius: 10px;
  padding: ${props => props.theme.spacing.sm};
  min-width: 200px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  transform-origin: top center;
`;

const DropdownWrapper = styled.div`
  position: relative;
  perspective: 600px;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen: defaultIsOpened,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(defaultIsOpened);
  useOutsideClick(ref, () => setIsOpen(false));

  React.useEffect(() => {
    if (typeof defaultIsOpened !== 'undefined') {
      setIsOpen(defaultIsOpened);
    }
  }, [defaultIsOpened]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <DropdownWrapper ref={ref}>{children}</DropdownWrapper>
    </DropdownContext.Provider>
  );
};

export const DropdownToggle: React.FC = ({ children }) => {
  const { toggle } = React.useContext(DropdownContext);

  return <div onClick={toggle}>{children}</div>;
};

export const DropdownContent: React.FC = ({ children }) => {
  const { isOpen } = React.useContext(DropdownContext);
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'rotateX(20deg)' },
    enter: { opacity: 1, transform: 'rotateX(0deg)' },
    leave: { opacity: 0, transform: 'rotateX(20deg)' },
  });

  return (
    <>
      {transitions.map(
        ({ props, item, key }) =>
          item && (
            <DropdownContentWrapper style={props} key={key}>
              {children}
            </DropdownContentWrapper>
          )
      )}
    </>
  );
};
