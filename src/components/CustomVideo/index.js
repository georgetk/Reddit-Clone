import React from 'react';
import Video from 'react-native-video';

const CustomVideo = ({id, url, isPaused}) => (
  <Video
    repeat
    key={id}
    source={{uri: url}}
    style={{height: 320, width: '100%'}}
    paused={isPaused}
  />
);

export default CustomVideo;
