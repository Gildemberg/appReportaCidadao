import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/routes'

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" 
                 barStyle="light-content" 
                 translucent={true} 
      />
      <Routes/>
    </NavigationContainer>
  );
}

export default App;
