import React, { useRef, useState, useEffect } from 'react';
import { Animated, Dimensions, Text, View } from 'react-native';
import { STAR_SIGNS } from '../constants.js';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../theme';

const { width, height } = Dimensions.get('window');
const wheelImage = require('../Assets/Images/wheel3.png');
const WHEEL_SIZE = width * 2;
const SNAP_WIDTH = width / 5;

function Wheel({ selectedRef }) {
  const initialRotation = -45;
  const [pageIndex, setPageIndex] = useState(0);
  const rotationValue = useRef(new Animated.Value(0)).current;
  const rotationInterpolation = rotationValue.interpolate({
    inputRange: [0, SNAP_WIDTH],
    outputRange: [`${30 + initialRotation}deg`, `${0 + initialRotation}deg`],
  });
  const [starSignData, setStarSignData] = useState(STAR_SIGNS);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length === 0) return;
    const page = viewableItems[0].index + 1;
    // setPageIndex(page);
    selectedRef.current.setNativeProps({
      text: `${page} /  ${viewableItems[0]?.item?.name}`,
    });
  }).current;

  const getItemLayout = (data, index) => ({
    length: SNAP_WIDTH,
    offset: SNAP_WIDTH * index,
    index,
  });

  const onStartReached = (e) => {
    if (e.nativeEvent.contentOffset.x <= 500) {
      const currentFirst = starSignData[0].id;
      const prependData = STAR_SIGNS.map((item, i) => ({
        ...item,
        id: currentFirst - 13 + (i + 1),
      }));
      setStarSignData([...prependData, ...starSignData]);
    }
  };

  const onEndReached = () => {
    const currentTotal = starSignData.length;
    const appendData = STAR_SIGNS.map((item, i) => ({
      ...item,
      id: currentTotal + (i + 1),
    }));
    setStarSignData([...starSignData, ...appendData]);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'green',
          width: SNAP_WIDTH,
          alignItems: 'center',
          borderWidth: 10,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          ...styles.wheelImage,
          transform: [{ rotateZ: rotationInterpolation }],
        }}
        source={wheelImage}
      />

      <Svg
        width={WHEEL_SIZE}
        height={WHEEL_SIZE}
        style={{ position: 'absolute', bottom: -WHEEL_SIZE / 2 }}
        viewBox={`0 0 810 810`}
      >
        <Path
          d="M402 405 296 0H0v810h810V0H514L407 405h-1Z"
          fill={Colors.primary}
          fillOpacity={0.67}
        />
      </Svg>

      <Animated.FlatList
        data={starSignData}
        keyExtractor={(item, i) => `${item.id}`}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        horizontal
        snapToAlignment="center"
        snapToInterval={SNAP_WIDTH}
        decelerationRate="fast"
        style={styles.scroller}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: rotationValue } } }],
          { useNativeDriver: true }
        )}
        initialScrollIndex={5}
        onEndReached={onEndReached}
        onMomentumScrollEnd={onStartReached}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
        }}
      />

    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wheelImage: {
    position: 'absolute',
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    bottom: -(WHEEL_SIZE / 2),
  },
  scroller: {
    backgroundColor: 'red',
    height: WHEEL_SIZE / 2,
    position: 'absolute',
    width: '100%',
    opacity: 0,
  },
};

export { Wheel };
