import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movies } from '../interfaces/movie';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movies[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
          {title}
        </Text>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id.toString()}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster width={140} height={200} movie={item} />
        )}
      />
    </View>
  );
};

export default HorizontalSlider;
