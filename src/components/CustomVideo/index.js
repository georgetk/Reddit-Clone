import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Video from 'react-native-video';

const CustomVideo = forwardRef((props, ref) => {
  const [pause, setPause] = useState(props.isPaused);

  useImperativeHandle(ref, () => ({
    play: () => {
      setPause(false);
    },
    pause: () => {
      setPause(true);
    },
  }));

  return (
    <Video
      repeat
      key={props.id}
      style={{height: 320, width: '100%'}}
      source={{uri: props.url}}
      paused={pause}
      resizeMode="cover" 
    />
  );
});

export default CustomVideo;
