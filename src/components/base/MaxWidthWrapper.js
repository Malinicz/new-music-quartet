import styled from 'styles';

export const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;
