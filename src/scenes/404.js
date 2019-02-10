import React from 'react';
import styled from 'styles';

const NotFoundPageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.h1`
  margin-top: 100px;
  text-align: center;
`;

export default () => (
  <NotFoundPageHolder>
    <Info>Nie znaleziono strony</Info>
  </NotFoundPageHolder>
);
