import React, { useRef, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

const frames = [
  {
    content: (
      <G opacity={0.2} fill="#000">
        <Path d="M9 8h1v3H9z" />
        <Path d="M8 10V9h3v1z" />
      </G>
    )
  },
  {
    content: (
      <G opacity={0.4} fill="#000">
        <Path d="m9.664 6.956.966.259-1.294 4.83-.966-.26z" />
        <Path d="m6.956 9.336.259-.966 4.83 1.294-.26.966z" />
      </G>
    )
  },
  {
    content: (
      <G>
        <G opacity={0.6} fill="#000">
          <Path d="m10.817 6.219.866.5-3.5 6.062-.866-.5z" />
          <Path d="m6.219 8.183.5-.866 6.062 3.5-.5.866z" />
        </G>
        <Path
          opacity={0.6}
          fill="#C4C4C4"
          d="m8.951 7.45.866.5-.5.867-.866-.5zM7.951 9.183l.866.5-.5.866-.866-.5zM9.683 10.183l.866.5-.5.866-.866-.5zM10.683 8.45l.866.5-.5.867-.866-.5z"
        />
      </G>
    )
  },
  {
    content: (
      <G opacity={0.2}>
        <Path fill="#000" d="m13.147 6.817.5.866-7.794 4.5-.5-.866z" />
        <Path fill="#000" d="m6.817 5.853.866-.5 4.5 7.794-.866.5z" />
        <Path fill="#C4C4C4" d="m10.049 7.451.5.866-.866.5-.5-.866z" />
        <Path
          fill="#E9E9E9"
          d="m9.549 6.585.5.866-.866.5-.5-.866zM10.915 6.951l.5.866-.866.5-.5-.866z"
        />
        <Path fill="#C4C4C4" d="m8.317 8.451.5.866-.866.5-.5-.866z" />
        <Path
          fill="#E9E9E9"
          d="m7.45 8.951.5.866-.865.5-.5-.866zM7.817 7.585l.5.866-.866.5-.5-.866z"
        />
        <Path fill="#C4C4C4" d="m9.317 10.183.5.866-.866.5-.5-.866z" />
        <Path
          fill="#E9E9E9"
          d="m9.817 11.049.5.866-.866.5-.5-.866zM8.45 10.683l.5.866-.865.5-.5-.866z"
        />
        <Path fill="#C4C4C4" d="m11.049 9.183.5.866-.866.5-.5-.866z" />
        <Path
          fill="#E9E9E9"
          d="m11.915 8.683.5.866-.866.5-.5-.866zM11.549 10.05l.5.865-.866.5-.5-.866z"
        />
      </G>
    )
  },
  {
    content: (
      <G>
        <Path fill="#535353" d="M9 9v1H6V9zM13 9v1h-3V9zM9 6h1v3H9zM9 10h1v3H9z" />
        <Path fill="#C4C4C4" d="M11 8v1h-1V8z" />
        <Path fill="#E9E9E9" d="M11 7v1h-1V7z" />
        <Path fill="#F5F5F5" d="M11 6v1h-1V6z" />
        <Path fill="#E9E9E9" d="M12 8v1h-1V8z" />
        <Path fill="#F5F5F5" d="M12 7v1h-1V7zM13 8v1h-1V8z" />
        <Path fill="#C4C4C4" d="M9 8v1H8V8z" />
        <Path fill="#E9E9E9" d="M8 8v1H7V8z" />
        <Path fill="#F5F5F5" d="M7 8v1H6V8z" />
        <Path fill="#E9E9E9" d="M9 7v1H8V7z" />
        <Path fill="#F5F5F5" d="M8 7v1H7V7zM9 6v1H8V6z" />
        <Path fill="#C4C4C4" d="M9 10v1H8v-1z" />
        <Path fill="#E9E9E9" d="M9 11v1H8v-1z" />
        <Path fill="#F5F5F5" d="M9 12v1H8v-1z" />
        <Path fill="#E9E9E9" d="M8 10v1H7v-1z" />
        <Path fill="#F5F5F5" d="M8 11v1H7v-1zM7 10v1H6v-1z" />
        <Path fill="#C4C4C4" d="M11 10v1h-1v-1z" />
        <Path fill="#E9E9E9" d="M12 10v1h-1v-1z" />
        <Path fill="#F5F5F5" d="M13 10v1h-1v-1z" />
        <Path fill="#E9E9E9" d="M11 11v1h-1v-1z" />
        <Path fill="#F5F5F5" d="M12 11v1h-1v-1zM11 12v1h-1v-1z" />
      </G>
    )
  },
  {
    content: (
      <G>
        <Path
          fill="#A7A7A7"
          d="m9.272 8.83-.441.898-1.795-.882.44-.898zM11.964 10.153l-.44.898-1.796-.882.441-.898z"
        />
        <Path
          fill="#A7A7A7"
          d="m10.153 7.036.897.44-.881 1.796-.898-.441zM8.831 9.728l.898.441-.882 1.795-.898-.44z"
        />
        <Path
          opacity={1}
          fill="#C4C4C4"
          d="m11.508 8.815-.441.898-.898-.44.441-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m11.949 7.918-.44.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m12.39 7.02-.441.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m12.406 9.256-.441.897-.898-.44.441-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m12.847 8.358-.441.898-.898-.441.441-.898zM13.303 9.697l-.441.898-.898-.441.441-.898z"
        />
        <Path
          opacity={1}
          fill="#C4C4C4"
          d="m9.713 7.933-.441.898-.898-.441.441-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m8.815 7.492-.44.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m7.918 7.051-.441.898-.898-.441.441-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m10.153 7.035-.44.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m9.256 6.595-.441.897-.898-.44.441-.898zM10.594 6.138l-.44.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#C4C4C4"
          d="m8.83 9.729-.44.897-.898-.44.441-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m8.39 10.626-.441.898-.898-.441.441-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m7.949 11.524-.441.897-.897-.44.44-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m7.933 9.287-.44.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m7.492 10.185-.44.897-.898-.44.44-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m7.036 8.847-.441.898-.898-.441.441-.898z"
        />
        <Path
          opacity={1}
          fill="#C4C4C4"
          d="m10.626 10.61-.44.898-.898-.441.44-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m11.524 11.05-.441.898-.898-.44.441-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m12.42 11.492-.44.897-.898-.44.441-.898z"
        />
        <Path
          opacity={1}
          fill="#E9E9E9"
          d="m10.185 11.508-.441.897-.898-.44.441-.898z"
        />
        <Path
          opacity={1}
          fill="#F5F5F5"
          d="m11.082 11.948-.44.898-.898-.441.44-.898zM9.744 12.405l-.44.898-.898-.441.44-.898z"
        />
      </G>
    )
  },
  {
    content: (
      <G>
        <Path fill="#D2D2D2" d="M9 9v1H8V9zM11 9v1h-1V9zM9 8h1v1H9zM9 10h1v1H9z" />
        <Path opacity={1} fill="#C4C4C4" d="M11 8v1h-1V8z" />
        <Path opacity={1} fill="#E9E9E9" d="M11 7v1h-1V7z" />
        <Path opacity={1} fill="#F5F5F5" d="M11 6v1h-1V6z" />
        <Path opacity={1} fill="#E9E9E9" d="M12 8v1h-1V8z" />
        <Path opacity={1} fill="#F5F5F5" d="M12 7v1h-1V7zM13 8v1h-1V8z" />
        <Path opacity={1} fill="#C4C4C4" d="M9 8v1H8V8z" />
        <Path opacity={1} fill="#E9E9E9" d="M8 8v1H7V8z" />
        <Path opacity={1} fill="#F5F5F5" d="M7 8v1H6V8z" />
        <Path opacity={1} fill="#E9E9E9" d="M9 7v1H8V7z" />
        <Path opacity={1} fill="#F5F5F5" d="M8 7v1H7V7zM9 6v1H8V6z" />
        <Path opacity={1} fill="#C4C4C4" d="M9 10v1H8v-1z" />
        <Path opacity={1} fill="#E9E9E9" d="M9 11v1H8v-1z" />
        <Path opacity={1} fill="#F5F5F5" d="M9 12v1H8v-1z" />
        <Path opacity={1} fill="#E9E9E9" d="M8 10v1H7v-1z" />
        <Path opacity={1} fill="#F5F5F5" d="M8 11v1H7v-1zM7 10v1H6v-1z" />
        <Path opacity={1} fill="#C4C4C4" d="M11 10v1h-1v-1z" />
        <Path opacity={1} fill="#E9E9E9" d="M12 10v1h-1v-1z" />
        <Path opacity={1} fill="#F5F5F5" d="M13 10v1h-1v-1z" />
        <Path opacity={1} fill="#E9E9E9" d="M11 11v1h-1v-1z" />
        <Path opacity={1} fill="#F5F5F5" d="M12 11v1h-1v-1zM11 12v1h-1v-1z" />
      </G>
    )
  },
]

function Star({ id, x, y, removeStar }) {
  const [frame, setFrame] = useState(0);
  const [alive, setAlive] = useState(true);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(nextFrame, 100);

    return () => {
      clearInterval(interval.current);
    }
  }, []);

  useEffect(() => {
    if (alive === false) removeStar(id);
  }, [alive])

  const nextFrame = () => {
    setFrame((value) => {
      if (value + 1 >= frames.length) {
        setAlive(false);
        clearInterval(interval.current);
        return 0;
      }
      return value + 1;
    });
  }

  if (alive === false) return null;

  return (
    <Svg
      width={29}
      height={29}
      viewBox={'0 0 19 19'}
      style={{ position: 'absolute', opacity: 0.75, left: x, top: y }}
    >
      {frames[frame].content}
    </Svg>
  )
}

export { Star }