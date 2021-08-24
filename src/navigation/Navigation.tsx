import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
