import {CustomImage, CustomVideoMemoized} from '../../../components';
import React from 'react';
import {View} from 'react-native';

const RenderMedia = ({data, index, videoRef}) => {
  const {post_hint: type} = data;

  if (type === 'hosted:video') {
    return (
      <CustomVideoMemoized
        id={data?.id}
        url={data?.media?.reddit_video?.fallback_url}
        isPaused={index !== 0}
        ref={videoRef[data?.id]}
      />
    );
  } else if (
    type === 'image' ||
    (data?.thumbnail !== 'self' && data?.thumbnail?.length > 0)
  ) {
    return (
      <CustomImage
        id={data?.id}
        url={type === 'image' ? data.url : data?.thumbnail}
      />
    );
  }
  return <View />;
};

export const RenderMediaMemoized = RenderMedia;
