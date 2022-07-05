import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../assets/logo.svg';

// eslint-disable-next-line import/prefer-default-export
export function HeaderContainer({ children }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}
