import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/credits';

interface Props {
  actor: Cast;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white'
  },
  actorInfo: {
    marginLeft: 10
  }
});

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 5 }}
        source={{ uri }}
      />
      <View style={styles.actorInfo}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.8 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;
