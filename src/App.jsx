import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

import {
  Browse,
  Home,
  SignIn,
  SignUp,
} from './pages';

function App() {
  const { user } = useAuthListener();

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          element={(
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
            >
              <SignIn />
            </IsUserRedirect>
          )}
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={(
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
            >
              <SignUp />
            </IsUserRedirect>
          )}
        />
        <Route
          exact
          path={ROUTES.BROWSE}
          element={(
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          )}
        />
        <Route
          path={ROUTES.HOME}
          element={(
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              exact
            >
              <Home />
            </IsUserRedirect>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
