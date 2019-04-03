import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, LinkWrapper } from 'components/base';

import facebookLogo from './assets/facebook-logo.svg';
import youtubeLogo from './assets/youtube-logo.svg';

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

const SocialIconsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-bottom: 15px;
`;

const Facebook = styled.img`
  height: 40px;
`;

const Youtube = styled.img`
  height: 30px;
`;

const InvisibleLink = styled.a`
  color: ${({ theme }) => theme.colors.brightest};
`;

const FooterText = styled.div`
  font-size: 0.95em;
  margin-bottom: 15px;
`;

export const Footer = withRouteData(({ sharedData: { footer } }) => {
  return (
    <FooterHolder>
      <SocialIconsHolder>
        <LinkWrapper
          href="https://www.facebook.com/atmaquartet"
          target="_blank"
          rel="noopener noreferrer">
          <Facebook src={facebookLogo} alt="facebook logo" />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.youtube.com/channel/UCpmy9nNALahl3EZNj99bjEQ"
          target="_blank"
          rel="noopener noreferrer">
          <Youtube src={youtubeLogo} alt="youtube logo" />
        </LinkWrapper>
      </SocialIconsHolder>
      <FooterText>
        {footer.photoInfo}
        {': '}
        <InvisibleLink href="https://www.bartbarczyk.com">
          bartbarczyk.com
        </InvisibleLink>
        , Simon Buchou, Anita Wąsik-Płocińska
      </FooterText>
      <FooterText>{footer.allRightsReservedInfo}</FooterText>
    </FooterHolder>
  );
});

Footer.defaultProps = {
  sharedData: {},
};

Footer.propTypes = {
  sharedData: object,
};
