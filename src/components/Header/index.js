import React, { Component } from 'react';
import { withSiteData } from 'react-static';
import { object } from 'prop-types';
import styled, { keyframes } from 'styles';
import { getRgba } from 'styles/helpers';

import { Section } from 'components/base';
import { MenuBox } from './MenuBox';

const HeaderHolder = styled(Section.withComponent('header'))`
  position: fixed;
  top: 0;
  z-index: 100;
  height: 90px;
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

const MenuItem = styled.div`
  padding: 15px;
  transition: 0.3s ease all;
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
      siteData: { navigation },
    } = this.props;

    return (
      <HeaderHolder>
        <MenuBox handleClick={this.toggleMenu} isDark={!isMenuVisible} />
        {isMenuVisible && (
          <MenuItemsHolder>
            {Object.values(navigation).map((navItem) => (
              <MenuItem key={navItem.id}>{navItem.label}</MenuItem>
            ))}
          </MenuItemsHolder>
        )}
      </HeaderHolder>
    );
  }
}

HeaderComp.defaultProps = {
  siteData: {},
};

HeaderComp.propTypes = {
  siteData: object,
};

export const Header = withSiteData(HeaderComp);
