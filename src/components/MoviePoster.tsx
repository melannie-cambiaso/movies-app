import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movies } from '../interfaces/movie';

interface Props {
  movie: Movies;
  width?: number;
  height?: number;
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 18,
    elevation: 5
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
});

const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={{ width, height, marginHorizontal: 8 }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri }} />
      </View>
    </View>
  );
};

export default MoviePoster;
