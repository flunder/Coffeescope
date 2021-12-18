import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Star } from './Star';
const { width, height } = Dimensions.get('window');

function Stars(props) {
  const [stars, setStars] = useState([]);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(createStar, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const createStar = () => {
    setStars((stars) => {
      const newStars = [
        ...stars,
        {
          id: Math.floor(Math.random() * 1000),
          x: Math.random() * width,
          y: (Math.random() * height) / 2,
        },
      ];
      return newStars;
    });

    timer.current = setTimeout(createStar, Math.random() * 10000 + 100);
  };

  const removeStar = (id) => {
    setStars((stars) => {
      const newStars = [...stars.filter((star) => star.id != id)];
      return newStars;
    });
  };

  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      {stars.map((star, i) => (
        <Star key={star.id} removeStar={removeStar} {...star} />
      ))}
    </View>
  );
}

export { Stars };
