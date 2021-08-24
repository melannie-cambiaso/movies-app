import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movies } from '../interfaces/movie';

interface Props {
  movie: Movies;
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420
  },
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

export const MoviePoster = ({ movie }: Props) => {
  console.log(movie);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri }} />
      </View>
    </View>
  );
};
