import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  StandardSection,
  StandardSectionMain,
  StandardSectionAside,
  SectionImage,
  SectionHeading,
  SectionContent,
  SectionHeadingLine,
  SectionAsideTop,
  SectionAsideBottom,
  MaxWidthWrapper,
} from 'components/base';
import { CrossElement, AnimatedPhoto, Icon } from 'components';

import downloadImage from 'assets/download.jpg';
import downloadImageSmall from 'assets/download-small.jpg';

const DownloadItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const Download = withRouteData(({ routeData, createRef, isActive }) => {
  const {
    title,
    bio,
    bioLink,
    bioShort,
    bioShortLink,
    rider,
    riderLink,
    photos,
    photosLink,
    mainPhotoAlt,
  } = routeData.download;

  return (
    <StandardSection ref={(el) => createRef('download', el)} name={title}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <SectionImage>
            <AnimatedPhoto
              image={downloadImage}
              imageSmall={downloadImageSmall}
              isActive={isActive}
              alt={mainPhotoAlt}
            />
            <CrossElement />
          </SectionImage>
          <SectionContent />
        </StandardSectionMain>
        <StandardSectionAside>
          <SectionAsideTop>
            <DownloadItem
              href={bioLink}
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="document" size={25} marginRight={10} />
              {bio}
            </DownloadItem>
            <DownloadItem
              href={bioShortLink}
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="document" size={25} marginRight={10} />
              {bioShort}
            </DownloadItem>
            <DownloadItem
              href={riderLink}
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="document" size={25} marginRight={10} />
              {rider}
            </DownloadItem>
            <DownloadItem
              href={photosLink}
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="document" size={25} marginRight={10} />
              {photos}
            </DownloadItem>
          </SectionAsideTop>
          <SectionAsideBottom />
        </StandardSectionAside>
      </MaxWidthWrapper>
    </StandardSection>
  );
});

Download.defaultProps = {
  routeData: {},
};

Download.propTypes = {
  routeData: object,
};
