import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Video from 'react-native-video';
import {commonStyles} from '../../constants';

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
      style={commonStyles.mediaContainer}
      source={{uri: props.url}}
      paused={pause}
      resizeMode="cover"
    />
  );
});

export default CustomVideo;
