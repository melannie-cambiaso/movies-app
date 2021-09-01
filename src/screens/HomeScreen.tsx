import React, { useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { View, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {
  GradientBackground,
  HorizontalSlider,
  MoviePoster
} from '../components';
import { useMovies } from '../hooks/useMovies';
import ImageColors from 'react-native-image-colors';
import { getImageColors } from '../helpers/getColors';
import { useContext } from 'react';
import { GradientContext } from '../context/GradientContext';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext(GradientContext);

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ flex: 1, marginTop: top + 20 }}>
          {/* Principal carousel */}
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Popular movies */}

          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />

          {/* Popular movies */}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
