import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLogin = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLogin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
