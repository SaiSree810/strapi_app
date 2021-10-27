/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@strapi/parts/Box';

const VideoPreviewWrapper = styled(Box)`
  canvas,
  video {
    display: block;
    max-width: 100%;
    max-height: ${({ size }) => (size === 'M' ? 164 / 16 : 88 / 16)}rem;
  }
`;

// According to MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState#value
const HAVE_FUTURE_DATA = 3;

export const VideoPreview = ({ url, mime, onLoadDuration, size, uniqueKey }) => {
  const handleTimeUpdate = e => {
    if (e.target.currentTime > 0) {
      const video = e.target;
      const canvas = document.createElement('canvas');

      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

      video.replaceWith(canvas);
      onLoadDuration(video.duration);
    }
  };

  const handleThumbnailVisibility = e => {
    const video = e.target;

    if (video.readyState < HAVE_FUTURE_DATA) return;

    video.play();
  };

  return (
    <VideoPreviewWrapper size={size} key={uniqueKey}>
      <video
        muted
        onLoadedData={handleThumbnailVisibility}
        src={`${url}?unique_key=${uniqueKey}`}
        crossOrigin="anonymous"
        onTimeUpdate={handleTimeUpdate}
      >
        <source type={mime} />
      </video>
    </VideoPreviewWrapper>
  );
};

VideoPreview.defaultProps = {
  onLoadDuration: () => {},
  size: 'M',
  uniqueKey: undefined,
};

VideoPreview.propTypes = {
  url: PropTypes.string.isRequired,
  // uniqueKey allows to fetch the asset and to handle its caching correctly
  uniqueKey: PropTypes.string,
  mime: PropTypes.string.isRequired,
  onLoadDuration: PropTypes.func,
  size: PropTypes.oneOf(['S', 'M']),
};
