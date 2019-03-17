import React from 'react';
import { node, string, object } from 'prop-types';
import { Head, withRouteData } from 'react-static';
import styled from 'styles';

import { Footer, Icon } from 'components';

import background from 'assets/background.png';
import logo from 'assets/logo-white.svg';

const SinglePageLayoutHolder = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  background-color: ${({ theme }) => theme.colors.brightest};
  overflow: hidden;
`;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;

const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const HeaderTopStripe = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darker};
  width: 100%;
  height: 40px;
`;

const BackButton = styled.a`
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  margin: 15px;
  color: ${({ theme }) => theme.colors.darker};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  cursor: pointer;
`;

const IconHolder = styled.div`
  transform: rotate(180deg);
  margin-top: -10px;
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 1500px;
`;

export const SinglePageLayout = withRouteData(
  ({ children, canonicalUrl, history, language }) => {
    return (
      <SinglePageLayoutHolder>
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <Header>
          <HeaderTopStripe>
            <Logo src={logo} />
          </HeaderTopStripe>
          <BackButton onClick={history.goBack}>
            <IconHolder>
              <Icon name="arrowRight" size={20} />
            </IconHolder>
            {language === 'pl' ? 'Powrót' : 'Back'}
          </BackButton>
        </Header>
        <Main>{children}</Main>
        <Footer />
      </SinglePageLayoutHolder>
    );
  }
);

SinglePageLayout.propTypes = {
  children: node.isRequired,
  history: object.isRequired,
  language: string.isRequired,
  canonicalUrl: string,
};
