import React from 'react';
import { Animated, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

/*
  Interpolates between 2 values for height
  ( iphone6 and iphone11 ) depending on the
  current screen-height.

  marginBottom: responsiveHeight(15, 0)
*/

const responsiveHeight = (heightOnIphone11, heightOnIphone6) => {
  return new Animated.Value(height)
    .interpolate({
      inputRange: [667, 896],
      outputRange: [heightOnIphone6, heightOnIphone11],
    })
    .__getValue();
};

export { responsiveHeight };