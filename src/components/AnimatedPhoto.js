import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styles';

const AnimatedPhotoHolder = styled.div`
  overflow: hidden;
  height: 100%;
`;

const PhotoImage = styled.div.attrs(({ isActive }) => ({
  style: {
    transform: isActive ? 'scale(1.1)' : 'scale(1)',
  },
}))`
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  transition: transform 10s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    background-image: ${({ imageSmall }) => `url(${imageSmall})`};
  }
`;

export const AnimatedPhoto = ({ image, imageSmall, isActive }) => {
  return (
    <AnimatedPhotoHolder>
      <PhotoImage image={image} imageSmall={imageSmall} isActive={isActive} />
    </AnimatedPhotoHolder>
  );
};

AnimatedPhoto.propTypes = {
  image: string.isRequired,
  imageSmall: string.isRequired,
  isActive: bool.isRequired,
};
