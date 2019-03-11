import styled from 'styles';

export const BackgroundLetter = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  font-size: 50em;
  font-weight: bold;
  opacity: 0.05;
  line-height: 1em;
  transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
  transition: transform 10s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;
