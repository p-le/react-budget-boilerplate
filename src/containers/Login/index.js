import React from 'react';

const Login = () => (
  <div>
    <i className="fa fa-github fa-3x" aria-hidden="true" onClick={() => console.log('clicked')} />
    <i className="fa fa-facebook-official fa-3x" aria-hidden="true"onClick={() => console.log('clicked')} />
    <i className="fa fa-google fa-3x" aria-hidden="true" onClick={() => console.log('clicked')} />
  </div>
);

export default Login;