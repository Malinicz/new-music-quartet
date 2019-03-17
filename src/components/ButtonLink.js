import React from 'react';
import { string } from 'prop-types';
import styled from 'styles';

import { Icon } from 'components';

const Label = styled.div`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  font-weight: bold;
  transition: margin 0.2s ease;
`;

const ButtonLinkHolder = styled.a`
  display: inline-flex;
  align-items: center;
  height: 50px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:hover ${Label} {
    margin-right: 3px;
  }
`;

export const ButtonLink = ({ label, href, target = '_self' }) => {
  return (
    <ButtonLinkHolder href={href} target={target} rel="noopener noreferrer">
      <Label>{label}</Label>
      <Icon name="arrowRight" size={17} marginLeft={10} marginTop={-1} />
    </ButtonLinkHolder>
  );
};

ButtonLink.defaultProps = {
  target: '_self',
};

ButtonLink.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  target: string,
};
