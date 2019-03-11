import React from 'react';
import { withSiteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/base';

const FooterBase = Section.withComponent('footer');
const FooterHolder = styled(FooterBase)`
  justify-content: center;
  max-width: unset;
  padding: 50px 15px 30px 15px;
  text-align: center;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.colors.brightest};
  background-color: ${({ theme }) => theme.colors.darker};
`;

export const Footer = withSiteData(({ siteData: { footer } }) => {
  return <FooterHolder>{footer.allRightsReservedInfo}</FooterHolder>;
});

Footer.defaultProps = {
  siteData: {},
};

Footer.propTypes = {
  siteData: object,
};
