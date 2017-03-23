import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../utils/auth';

console.log(auth);
const AuthRoute = ({ component, ...attrs }) => {
  console.log(component);
  console.log(...attrs);
  return (<Route 
    {...attrs} 
    render={props => ( auth.isAuthenticated ? (
      React.createComponent(component, props)
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }} 
      />
    )
  )} 
  />);
};

export default AuthRoute;