import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check for auth token

  return isAuthenticated ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} /> // Preserve original route
  );
};

export default PrivateRoute;
