import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  StandardSection,
  StandardSectionMain,
  SectionHeading,
  SectionHeadingLine,
  MaxWidthWrapper,
  StandardSectionAside,
} from 'components/base';
import { MoreContentButton } from 'components';

import albumPhoto from 'assets/discography/albumPhoto.jpg';
import albumPhotoBack from 'assets/discography/albumPhotoBack.jpg';

const AlbumPhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
`;

const AlbumPhoto = styled.img`
  position: relative;
  width: 80%;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 100%;
  }
`;

const AlbumPhotoBack = styled.img`
  position: absolute;
  z-index: 2;
  width: 70%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
  }
`;

const CustomAside = styled(StandardSectionAside)`
  padding: 15px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    align-items: flex-start;
    padding: 15px 0;
  }
`;

export const Discography = withRouteData(({ routeData }) => {
  const { title, moreContentButtonLabel } = routeData.discography;

  return (
    <StandardSection name={title}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <AlbumPhotoWrapper>
            <AlbumPhoto src={albumPhoto} />
            <AlbumPhotoBack src={albumPhotoBack} />
          </AlbumPhotoWrapper>
        </StandardSectionMain>
        <CustomAside>
          <MoreContentButton
            label={moreContentButtonLabel}
            href="/dyskografia"
          />
        </CustomAside>
      </MaxWidthWrapper>
    </StandardSection>
  );
});

Discography.defaultProps = {
  routeData: {},
};

Discography.propTypes = {
  routeData: object,
};
