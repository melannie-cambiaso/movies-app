import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useAnimation from '../hooks/useAnimation';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
  const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
  const { opacity, fadeIn, fadeOut } = useAnimation();
  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
        colors={[prevColors.primary, prevColors.secondary, 'white']}
      />

      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
          colors={[colors.primary, colors.secondary, 'white']}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
