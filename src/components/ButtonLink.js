import React from 'react';
import { string } from 'prop-types';
import styled from 'styles';

import { Icon } from 'components';

const ButtonLinkHolder = styled.a`
  display: inline-flex;
  align-items: center;
  height: 50px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  font-weight: bold;
`;

export const ButtonLink = ({ label }) => {
  return (
    <ButtonLinkHolder>
      <Label>{label}</Label>
      <Icon name="arrowRight" size={17} marginLeft={10} marginTop={-1} />
    </ButtonLinkHolder>
  );
};

ButtonLink.propTypes = {
  label: string.isRequired,
};
