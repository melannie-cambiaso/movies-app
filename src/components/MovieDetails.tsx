import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/credits';
import { MovieFull } from '../interfaces/movie';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10
  }
});

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.rowContainer}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text style={{ marginLeft: 5 }}>{movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Movie history */}
        <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

        {/* Movie budget */}
        <View style={styles.rowContainer}>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Presupuesto</Text>
          <Text style={{ fontSize: 12, marginLeft: 5 }}>
            {currencyFormatter.format(movieFull.budget, {
              code: 'USD',
              precision: 0
            })}
          </Text>
        </View>

        {/* Movie cast  */}

        <View style={{ marginTop: 10, marginBottom: 40 }}>
          <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
            Actores
          </Text>
          <CastItem actor={cast[0]} />
        </View>
      </View>
    </>
  );
};

export default MovieDetails;
