import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from '../context/authentication';
import i18n from '../../i18n/i18n'

export default function AuthorizedRoute({
  id,
  path,
  exact,
  strict,
  isPublic,
  children,
  ...rest
}) {
  const { isAuthenticated } = useAuthentication();
  const authorized = isPublic || isAuthenticated;  
  const language = i18n.language
  return (
    <Route
      {...rest}
      key={id}
      path={path}
      exact={exact}
      strict={strict}
      render={({ location }) =>          
        authorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/'+ language + '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
