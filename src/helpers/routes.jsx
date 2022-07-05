/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export function IsUserRedirect({
  user,
  loggedInPath,
  children,
}) {
  return (
    user ? <Navigate to={loggedInPath} /> : children
  );
}

export function ProtectedRoute({ user, children }) {
  const location = useLocation();

  return (
    user ? (
      children
    ) : (
      <Navigate
        to="/signin"
        state={{ from: location.pathname }}
      />
    )
  );
}
