import React from 'react';
import { string } from 'prop-types';
import styled from 'styles';

import { Icon } from 'components';

const Label = styled.div`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  font-weight: bold;
`;

const IconHolder = styled.div`
  transition: transform 0.2s ease;
`;

const MoreContentButtonHolder = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  height: 80px;
  padding: 18px 15px 15px 15px;
  color: ${({ theme }) => theme.colors.darker};
  border-radius: 2px;
  border: ${({ theme }) => `3px solid ${theme.colors.darkest}`};
  cursor: pointer;

  &:hover ${IconHolder} {
    transform: translateX(5px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const MoreContentButton = ({ label, href }) => {
  return (
    <MoreContentButtonHolder href={href}>
      <Label>{label}</Label>
      <IconHolder>
        <Icon name="arrowRight" size={25} />
      </IconHolder>
    </MoreContentButtonHolder>
  );
};

MoreContentButton.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
};
