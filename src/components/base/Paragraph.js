import styled from 'styles';

export const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.4em;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
