import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}