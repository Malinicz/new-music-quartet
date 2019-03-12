import React from 'react';
import styled from 'styles';
import { func, string } from 'prop-types';

import { Section } from 'components/base';
import { LanguageSwitch } from './LanguageSwitch';
import { PhotoCarousel } from './PhotoCarousel';

import logo from './assets/logo-black.svg';

const IntroHolder = styled(Section)`
  max-width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darker};
  align-items: flex-start;
`;

const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  width: 300px;
`;

export const Intro = ({ handleLanguageSwitch, activeLanguage }) => {
  return (
    <IntroHolder>
      <PhotoCarousel />
      <Logo src={logo} />
      <LanguageSwitch
        handleLanguageSwitch={handleLanguageSwitch}
        activeLanguage={activeLanguage}
      />
    </IntroHolder>
  );
};

Intro.propTypes = {
  handleLanguageSwitch: func.isRequired,
  activeLanguage: string.isRequired,
};
