import React from 'react';
import styled from 'styles';

const MailSubmissionSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.h1`
  margin-top: 100px;
  text-align: center;
`;

export default () => (
  <MailSubmissionSuccess>
    <Info>Mail został wysłany! Odpowiemy tak szybko, jak to możliwe ;)</Info>
  </MailSubmissionSuccess>
);
