import styled from 'styles';
import { H1 } from './Headers';

const IMAGE_HEIGHT = 450;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing}px;
  margin: 0 auto;
  width: 100%;
`;

export const StandardSection = styled(Section)`
  padding-top: 120px;
`;

export const StandardSectionMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
  position: relative;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex: 20;
  }
`;

export const StandardSectionAside = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  position: relative;
`;

export const SectionImage = styled.div`
  position: relative;
  max-width: 730px;
  height: ${IMAGE_HEIGHT}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    max-width: ${({ theme }) => theme.breakpoints.medium}px;
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    height: 300px;
    margin-left: -15px;
    margin-right: -15px;
  }
`;

export const SectionHeading = styled(H1)`
  position: absolute;
  top: -1.2em;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    left: 0;
  }
`;

export const SectionHeadingLine = styled.div`
  display: inline-block;
  width: 150px;
  height: 3px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.darkest};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 50px;
  }
`;

export const SectionContent = styled.div`
  padding-top: 15px;
  padding-right: 30px;
  padding-left: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const SectionAsideTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  height: ${IMAGE_HEIGHT}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    height: auto;
    padding: 0;
  }
`;

export const SectionAsideBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: flex-start;
  }
`;

export const SinglePageSectionMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 730px;
  margin: 70px auto 50px auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 50px auto;
  }
`;

export const SinglePageSectionPhoto = styled.img`
  width: 100%;
`;

export const SinglePageSectionHeading = styled(SectionHeading)`
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    left: 15px;
  }
`;

export const SinglePageSectionContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 15px;
  }
`;
