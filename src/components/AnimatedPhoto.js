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
`;

export const AnimatedPhoto = ({ image, isActive }) => {
  return (
    <AnimatedPhotoHolder>
      <PhotoImage image={image} isActive={isActive} />
    </AnimatedPhotoHolder>
  );
};

AnimatedPhoto.propTypes = {
  image: string.isRequired,
  isActive: bool.isRequired,
};
