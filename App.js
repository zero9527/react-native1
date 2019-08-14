/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigators from './app-navigators';

const AppContainer = createAppContainer(AppNavigators);

const App = () => {
  return <AppContainer />
};

export default App;
