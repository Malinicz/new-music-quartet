import React from 'react';
import { string } from 'prop-types';
import styled from 'styles';

import { Icon } from 'components';

const MoreContentButtonHolder = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  height: 80px;
  padding: 18px 15px 15px 15px;
  border-radius: 2px;
  border: ${({ theme }) => `3px solid ${theme.colors.darkest}`};
  cursor: pointer;
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  font-weight: bold;
`;

export const MoreContentButton = ({ label }) => {
  return (
    <MoreContentButtonHolder>
      <Label>{label}</Label>
      <Icon name="arrowRight" size={25} />
    </MoreContentButtonHolder>
  );
};

MoreContentButton.propTypes = {
  label: string.isRequired,
};
