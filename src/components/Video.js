import React from 'react';
import styled from 'styles';
import { string, number } from 'prop-types';

const IFrameHolder = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-bottom: 30px;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 100%;
  }
`;

const IFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-bottom: 0.5em;
`;

export const Video = ({ url, width = 520, height = 280 }) => {
  return (
    <IFrameHolder key={url} width={width} height={height}>
      <IFrame
        src={`${url}?modestbranding=1&showinfo=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </IFrameHolder>
  );
};

Video.defaultProps = {
  width: 520,
  height: 280,
};

Video.propTypes = {
  url: string.isRequired,
  width: number,
  height: number,
};
