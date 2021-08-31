import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/credits';
import { MovieFull } from '../interfaces/movie';
import currencyFormatter from 'currency-formatter';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
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
        <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 16 }}>
          {currencyFormatter.format(movieFull.budget, {
            code: 'USD',
            precision: 0
          })}
        </Text>
      </View>
    </>
  );
};

export default MovieDetails;
