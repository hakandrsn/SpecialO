import React from 'react';
import Routes from './Navigation/Routes';
import {AuthProvider} from './Navigation/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;