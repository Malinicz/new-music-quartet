import React from 'react';
import styled from 'styles';
import { func, string } from 'prop-types';

import { Section } from 'components/base';
import { LanguageSwitch } from './LanguageSwitch';

import logo from 'assets/logo-black.svg';
import pic from 'assets/main.jpg';

const IntroHolder = styled(Section)`
  max-width: 100%;
  height: 100vh;
  min-height: 100vh;
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

const Photo = styled.div`
  background-image: url(${pic});
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  width: 100%;
  height: 100%;
`;

export const Intro = ({ handleLanguageSwitch, activeLanguage }) => {
  return (
    <IntroHolder>
      <Photo />
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
