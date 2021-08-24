import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useMovies } from '../hooks/useMovies';

const HomeScreen = () => {
  const { nowPlaying, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" />
      </View>
    );
  }
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
