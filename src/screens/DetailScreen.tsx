import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { Dimensions, ScrollView } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';
import { RouteStackParams } from '../navigation/Navigation';

const { height } = Dimensions.get('screen');

interface Props extends StackScreenProps<RouteStackParams, 'Detail'> {}
const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: height * 0.7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.5
  }
});

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri }} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
