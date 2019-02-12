import React, { Component } from 'react';
import styled from 'styled-components';

const PictureHolder = styled.div`
  position: fixed;
  width: 50%;
  height: 100vh;
`;

const Pic = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ pic }) => `url(${pic})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { activePic } = this.props;
    return (
      <PictureHolder>
        <Pic pic={activePic} />
      </PictureHolder>
    );
  }
}

export default Picture;
