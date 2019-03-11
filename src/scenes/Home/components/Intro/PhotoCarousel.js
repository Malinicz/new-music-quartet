import React, { Component } from 'react';
import styled from 'styles';

import pic0 from './assets/pic0.jpg';
// import pic1 from './assets/pic1.jpg';
// import pic2 from './assets/pic2.jpg';

const photos = [pic0, pic0, pic0];

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
  width: 300%;
`;

const Photo = styled.div`
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  width: 100%;
`;

// const Button = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
// `;

// const NextButton = styled(Button)`
//   right: 15px;
// `;

// const PrevButton = styled(Button)`
//   left: 15px;
// `;

export class PhotoCarousel extends Component {
  state = {
    activeIndex: 0,
  };

  onPrevClick = () => {};

  onNextClick = () => {};

  render() {
    const { activeIndex } = this.state;

    const prevIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;

    return (
      <PhotoCarouselHolder>
        <PhotosHolder>
          <Photo image={photos[prevIndex]} />
          <Photo image={photos[activeIndex]} />
          <Photo image={photos[nextIndex]} />
        </PhotosHolder>
        {/* <PrevButton onClick={this.onPrevClick}>prev</PrevButton>
        <NextButton onClick={this.onNextClick}>next</NextButton> */}
      </PhotoCarouselHolder>
    );
  }
}
