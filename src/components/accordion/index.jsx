import React, { createContext, useState, useContext } from 'react';
import {
  Container,
  Frame,
  Title,
  Item,
  Header,
  Body,
  Inner,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return (
    <Frame {...restProps}>
      {children}
    </Frame>
  );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>
        {children}
      </Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  // eslint-disable-next-line no-unused-vars
  const { toggleShow, setToggleShow } = useContext();

  return (
    // eslint-disable-next-line no-shadow
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext();

  return toggleShow ? (
    <Body {...restProps}>
      {children}
    </Body>
  ) : (
    null
  );
};
