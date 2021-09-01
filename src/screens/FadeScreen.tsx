import React from 'react';
import { Animated, Button, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';

const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useAnimation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity,
          marginBottom: 10
        }}></Animated.View>
    </View>
  );
};

export default FadeScreen;
