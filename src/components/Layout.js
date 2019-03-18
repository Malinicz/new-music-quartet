import React from 'react';
import { node, string } from 'prop-types';
import { Head, withRouteData } from 'react-static';
import styled from 'styles';

import { Header, Footer } from 'components';

import background from 'assets/background.png';

const LayoutHolder = styled.div`
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
  padding: 0 0 50px 0;
  width: 100%;
`;

export const Layout = withRouteData(({ children, canonicalUrl }) => {
  return (
    <LayoutHolder>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutHolder>
  );
});

Layout.propTypes = {
  children: node.isRequired,
  canonicalUrl: string,
};
