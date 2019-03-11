import React from 'react';
import { bool } from 'prop-types';
import styled from 'styles';

const CrossElementHolder = styled.div`
  position: absolute;
  right: ${({ left }) => (left ? 'unset' : 0)};
  left: ${({ left }) => (left ? 0 : 'unset')};
  bottom: 0;
  transform: ${({ left }) =>
    left ? 'translate(-30px, 42px)' : 'translate(30px, 42px)'};
  width: 60px;
  height: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 3px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkest};
  left: 50%;
  transform: translate(-50%);
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.darkest};
  bottom: 40px;
`;

export const CrossElement = ({ left }) => {
  return (
    <CrossElementHolder left={left}>
      <VerticalLine />
      <HorizontalLine />
    </CrossElementHolder>
  );
};

CrossElement.defaultProps = {
  left: false,
};

CrossElement.propTypes = {
  left: bool,
};
