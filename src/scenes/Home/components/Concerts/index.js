import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';

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
  BackgroundLetter,
  MaxWidthWrapper,
} from 'components/base';
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';
import { Calendar } from './Calendar';

import image from './main.jpg';

export const Concerts = withRouteData(({ routeData, createRef, isActive }) => {
  const {
    title,
    backgroundLetter,
    moreContentButtonLabel,
  } = routeData.concerts;

  return (
    <StandardSection ref={(el) => createRef('concerts', el)}>
      <MaxWidthWrapper flexDirection="row-reverse">
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <SectionImage>
            <AnimatedPhoto image={image} isActive={isActive} />
            <CrossElement left />
          </SectionImage>
          <SectionContent>
            <Calendar />
          </SectionContent>
        </StandardSectionMain>
        <StandardSectionAside>
          <SectionAsideTop>
            <BackgroundLetter x={0} y={50} isActive={isActive}>
              {backgroundLetter}
            </BackgroundLetter>
          </SectionAsideTop>
          <SectionAsideBottom>
            <MoreContentButton label={moreContentButtonLabel} />
          </SectionAsideBottom>
        </StandardSectionAside>
      </MaxWidthWrapper>
    </StandardSection>
  );
});

Concerts.defaultProps = {
  routeData: {},
};

Concerts.propTypes = {
  routeData: object,
};
