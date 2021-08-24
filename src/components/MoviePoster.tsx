import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    elevation: 5,
    backgroundColor: '#C9C9C9'
  },
  image: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#C9C9C9'
  }
});

const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
  const navigator = useNavigation();

  const onPress = () => {
    navigator.dispatch(
      CommonActions.navigate({ name: 'Detail', params: movie })
    );
  };
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width,
          height,
          marginHorizontal: 8,
          backgroundColor: '#C9C9C9',
          borderRadius: 18
        }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;
