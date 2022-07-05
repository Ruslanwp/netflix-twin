import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  Container,
  Input,
  Button,
  Text,
  Break,
} from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return (
    <Input {...restProps} />
  );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <MdKeyboardArrowRight width={24} height={24} />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  );
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return (
    <Break {...restProps} />
  );
};
