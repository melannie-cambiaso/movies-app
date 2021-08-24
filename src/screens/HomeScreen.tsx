import React from 'react';
import { Dimensions, FlatList, ScrollView } from 'react-native';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider, MoviePoster } from '../components';
import { useMovies } from '../hooks/useMovies';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popularMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: top + 20 }}>
        {/* Principal carousel */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={width}
            itemWidth={300}
          />
        </View>
        {/* Popular movies */}

        <HorizontalSlider title="Populares" movies={popularMovies} />

        {/* Popular movies */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
