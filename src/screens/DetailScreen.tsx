import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Movies } from '../interfaces/movie';
import { RouteStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RouteStackParams, 'Detail'> {}

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default DetailScreen;
