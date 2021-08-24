import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movie';

const HomeScreen = () => {
  useEffect(() => {
    movieDB
      .get<MovieDBNowPlaying>('/now_playing')
      .then(resp => console.log(resp.data));
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
