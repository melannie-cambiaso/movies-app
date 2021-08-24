import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" />
      </View>
    );
  }
  return (
    <View style={{ marginTop: top + 20 }}>
      {/* <MoviePoster movie={nowPlaying[0]} /> */}
      <View style={{ height: 440 }}>
        <Carousel
          data={nowPlaying}
          renderItem={({ item }) => <MoviePoster movie={item} />}
          sliderWidth={width}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
