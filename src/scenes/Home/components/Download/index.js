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

import image from './main.jpg';

const DownloadItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const Download = withRouteData(({ routeData, createRef, isActive }) => {
  const { title, bio, bioShort, rider, photos } = routeData.download;

  return (
    <StandardSection ref={(el) => createRef('download', el)} name={title}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <SectionImage>
            <AnimatedPhoto image={image} isActive={isActive} />
            <CrossElement />
          </SectionImage>
          <SectionContent />
        </StandardSectionMain>
        <StandardSectionAside>
          <SectionAsideTop>
            <DownloadItem>
              <Icon name="document" size={25} marginRight={10} />
              {bio}
            </DownloadItem>
            <DownloadItem>
              <Icon name="document" size={25} marginRight={10} />
              {bioShort}
            </DownloadItem>
            <DownloadItem>
              <Icon name="document" size={25} marginRight={10} />
              {rider}
            </DownloadItem>
            <DownloadItem>
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
