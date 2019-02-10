import React from 'react';
import { withSiteData } from 'react-static';
import { object } from 'prop-types';

import { Section } from 'components/ui/base';

const FooterBase = Section.withComponent('footer');
const FooterHolder = FooterBase.extend`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brightest};
  max-width: unset;
  padding: 50px 0 30px 0;
`;

export const Footer = withSiteData(({ siteData }) => {
  return <FooterHolder>this is footer</FooterHolder>;
});

Footer.defaultProps = {
  siteData: {},
};

Footer.propTypes = {
  siteData: object,
};
