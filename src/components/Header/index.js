import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled, { keyframes } from 'styles';
import { getRgba } from 'styles/helpers';

import { Section } from 'components/base';
import { MenuBox } from './MenuBox';

import { Link } from 'react-scroll';

const HeaderHolder = styled(Section.withComponent('header'))`
  position: fixed;
  top: 0;
  z-index: 100;
  height: 1px;
  padding: 0;
  max-width: 100%;
  background: transparent;
`;

const menuAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const MenuItemsHolder = styled.div`
  display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : 'none')};
  position: fixed;
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  font-size: 1.5em;
  font-family: 'GillSans';
  text-transform: uppercase;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  background: ${({ theme }) => getRgba(theme.colors.darker, 0.995)};
  animation: ${menuAnimation} 0.3s ease;
  animation-fill-mode: forwards;
`;

const MenuItem = styled(Link)`
  padding: 10px;
  transition: 0.3s ease all;
  font-size: 0.9em;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: #f5c54b;
  }
`;

class HeaderComp extends Component {
  state = { isMenuVisible: false };

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuVisible: !prevState.isMenuVisible }));
  };

  render() {
    const { isMenuVisible } = this.state;
    const {
      sharedData: { navigation },
    } = this.props;

    return (
      <HeaderHolder>
        <MenuBox handleClick={this.toggleMenu} isDark={!isMenuVisible} />
        {isMenuVisible && (
          <MenuItemsHolder>
            {Object.values(navigation).map((navItem) => (
              <MenuItem
                key={navItem.id}
                to={navItem.slug}
                smooth
                spy
                onClick={this.toggleMenu}>
                {navItem.label}
              </MenuItem>
            ))}
          </MenuItemsHolder>
        )}
      </HeaderHolder>
    );
  }
}

HeaderComp.defaultProps = {
  sharedData: {},
};

HeaderComp.propTypes = {
  sharedData: object,
};

export const Header = withRouteData(HeaderComp);
