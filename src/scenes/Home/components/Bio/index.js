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
  Paragraph,
  MaxWidthWrapper,
} from 'components/base';
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';

import image from './main.jpg';

export const Bio = withRouteData(({ routeData, createRef, isActive }) => {
  const {
    title,
    paragraph1,
    paragraph2,
    backgroundLetter,
    moreContentButtonLabel,
  } = routeData.bio;

  return (
    <StandardSection ref={(el) => createRef('bio', el)}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <SectionImage>
            <AnimatedPhoto image={image} isActive={isActive} />
            <CrossElement />
          </SectionImage>
          <SectionContent>
            <Paragraph>{paragraph1}</Paragraph>
            <Paragraph>{paragraph2}</Paragraph>
          </SectionContent>
        </StandardSectionMain>
        <StandardSectionAside>
          <SectionAsideTop>
            <BackgroundLetter x={-200} y={-250} isActive={isActive}>
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

Bio.defaultProps = {
  routeData: {},
};

Bio.propTypes = {
  routeData: object,
};
