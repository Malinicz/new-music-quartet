import React from 'react';
import styled from 'styles';
import { func, bool } from 'prop-types';

const MenuBoxBase = styled.div`
  position: absolute;
  background: ${({ theme, isDark }) =>
    isDark ? theme.colors.darker : theme.colors.brightest};
  width: 17px;
  height: 17px;
  transition: transform 0.2s ease, background-color 0.3s ease;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.02);
  z-index: 500;
  opacity: 0.95;
`;

const MenuBoxTL = styled(MenuBoxBase)`
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
`;

const MenuBoxTR = styled(MenuBoxBase)`
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
`;

const MenuBoxBL = styled(MenuBoxBase)`
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10px;
`;

const MenuBoxBR = styled(MenuBoxBase)`
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 10px;
`;

const MenuHolder = styled.div`
  position: fixed;
  z-index: 999;
  top: 30px;
  right: 30px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover ${MenuBoxBL} {
    transform: rotate(-90deg);
    border-bottom-left-radius: 0;
  }

  &:hover ${MenuBoxBR} {
    transform: rotate(90deg);
    border-bottom-right-radius: 0;
  }

  &:hover ${MenuBoxTL} {
    transform: rotate(90deg);
    border-top-left-radius: 0;
  }

  &:hover ${MenuBoxTR} {
    transform: rotate(-90deg);
    border-top-right-radius: 0;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const MenuBox = ({ handleClick, isDark }) => {
  return (
    <MenuHolder onClick={handleClick}>
      <MenuBoxTL isDark={isDark} />
      <MenuBoxTR isDark={isDark} />
      <MenuBoxBL isDark={isDark} />
      <MenuBoxBR isDark={isDark} />
    </MenuHolder>
  );
};

MenuBox.propTypes = {
  handleClick: func.isRequired,
  isDark: bool.isRequired,
};
