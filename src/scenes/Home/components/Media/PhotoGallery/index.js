import React, { Component } from 'react';
import styled from 'styles';

import { photos } from './config';

const PhotoGalleryHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  margin-top: 50px;
  margin-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    height: 500px;
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    height: 450px;
    margin-bottom: 30px;
  }
`;

const CenterPoint = styled.div`
  position: relative;
  width: 10%;
  height: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    height: 75px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 13%;
    height: 60px;
    transform: translate(50px, -30px);
  }
`;

const Photo = styled.div`
  display: ${({ mobileOnly }) => (!mobileOnly ? 'block' : 'none')};
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  transform: ${({ rotate, scale }) => `rotate(${rotate}deg) scale(${scale})`};
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  width: 300%;
  height: 300%;
  border-radius: 2px;
  box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 45px 10px rgba(0, 0, 0, 0.2);
    transform: ${({ rotate, scale }) =>
      `rotate(${rotate}deg) scale(${scale + 0.02})`};
  }

  &:active {
    transform: ${({ scale }) => `rotate(0deg) scale(${scale - 0.03})`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: ${({ desktopOnly }) => (desktopOnly ? 'none' : 'block')};
  }
`;

export class PhotoGallery extends Component {
  render() {
    return (
      <PhotoGalleryHolder>
        <CenterPoint>
          {photos.map((photo, index) => (
            <a key={`${photo.image}-${index}`} href={photo.fullImage}>
              <Photo
                image={photo.image}
                rotate={photo.rotate}
                scale={photo.scale}
                top={photo.top}
                left={photo.left}
                desktopOnly={photo.desktopOnly}
                mobileOnly={photo.mobileOnly}
                alt="Atma Quartet"
              />
            </a>
          ))}
        </CenterPoint>
      </PhotoGalleryHolder>
    );
  }
}
