import styled from 'styles';

export const Paragraph = styled.p`
  line-height: 1.4em;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
