import React from 'react';
import styled from 'styles';
import { func, string } from 'prop-types';

const LanguageSwitchHolder = styled.div`
  position: absolute;
  z-index: 110;
  display: flex;
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-weight: 500;
  font-size: 1.4em;
  padding: 15px;
`;

const LanguageCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  height: 40px;
  width: 40px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.brightest : theme.colors.darker};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.darker : theme.colors.brightest};
  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const LanguageSwitch = ({ handleLanguageSwitch, activeLanguage }) => {
  return (
    <LanguageSwitchHolder>
      {['pl', 'en'].map((language) => {
        const isActive = language === activeLanguage;

        return (
          <LanguageCell
            id={language}
            key={language}
            onClick={() => handleLanguageSwitch(language)}
            isActive={isActive}>
            {language}
          </LanguageCell>
        );
      })}
    </LanguageSwitchHolder>
  );
};

LanguageSwitch.propTypes = {
  handleLanguageSwitch: func.isRequired,
  activeLanguage: string.isRequired,
};
