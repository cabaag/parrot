
import React from 'react';
import {
  Redirect, Route
} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children, ...rest }: any) {
  const { token } = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }: any) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}/>
        )
      }/>
  );
}

export default React.memo(PrivateRoute);