import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/routes'

function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

export default App;
