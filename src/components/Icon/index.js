import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styles';
import { MailIcon, ArrowRightIcon, Document, CheckMarkIcon } from './svgIcons';

const icons = {
  mail: <MailIcon />,
  arrowRight: <ArrowRightIcon />,
  document: <Document />,
  checkmark: <CheckMarkIcon />,
};

const IconHolder = styled.div`
  display: inline-block;
  margin-top: ${({ marginTop }) => marginTop || 3}px;
  width: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  fill: currentColor;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
`;

export const Icon = ({ name, size, marginRight, marginLeft, marginTop }) => {
  return (
    <IconHolder
      size={size}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      {icons[name]}
    </IconHolder>
  );
};

Icon.defaultProps = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 3,
};

Icon.propTypes = {
  name: string.isRequired,
  size: number.isRequired,
  marginRight: number,
  marginLeft: number,
  marginTop: number,
};
