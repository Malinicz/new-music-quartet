import React, { Component } from 'react';
import styled, { keyframes } from 'styles';

import { Icon } from 'components';

import pic0 from './assets/pic0.jpg';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';

const photos = [pic0, pic1, pic2];

const PhotoCarouselHolder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PhotosHolder = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
`;

const photoAnimation = keyframes`
  from { opacity: 0; };
  to { opacity: 1; };
`;

const Photo = styled.div`
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  width: 100%;
  animation: ${photoAnimation} 1s ease;
  animation-fill-mode: forwards;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.darker};
  border-radius: 2px;
  transition: transform 0.2s ease;
  cursor: pointer;
`;

const NextButton = styled(Button)`
  right: 15px;
  transform: translateY(-50%);

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const PrevButton = styled(Button)`
  transform: translateY(-50%) rotate(180deg);
  left: 15px;

  &:active {
    transform: translateY(-50%) scale(0.95) rotate(180deg);
  }
`;

export class PhotoCarousel extends Component {
  state = {
    activeIndex: 0,
  };

  onPrevClick = () => {
    const { activeIndex } = this.state;
    const prevIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: prevIndex });
  };

  onNextClick = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <PhotoCarouselHolder>
        <PhotosHolder>
          <Photo key={activeIndex} image={photos[activeIndex]} />
        </PhotosHolder>
        <PrevButton onClick={this.onPrevClick}>
          <Icon name="arrowRight" size={20} marginTop={8} />
        </PrevButton>
        <NextButton onClick={this.onNextClick}>
          <Icon name="arrowRight" size={20} marginTop={8} />
        </NextButton>
      </PhotoCarouselHolder>
    );
  }
}
