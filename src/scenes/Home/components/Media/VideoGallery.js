import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import styled from 'styles';

import { Video } from 'components';

const VideoGalleryHolder = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin: 70px 0 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 100px 0 0 0;
  }
`;

export class VideoGallery extends Component {
  render() {
    const { videos } = this.props;

    return (
      <VideoGalleryHolder>
        {videos.map((video) => {
          return <Video url={video.url} />;
        })}
      </VideoGalleryHolder>
    );
  }
}

VideoGallery.defaultProps = {
  videos: [],
};

VideoGallery.propTypes = {
  videos: arrayOf(object),
};
