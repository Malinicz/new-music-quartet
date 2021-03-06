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
  Paragraph,
  MaxWidthWrapper,
} from 'components/base';
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';

import bioImage from 'assets/bio.jpg';
import bioImageSmall from 'assets/bio-small.jpg';

export const Bio = withRouteData(({ routeData, createRef, isActive }) => {
  const {
    title,
    paragraph1,
    paragraph2,
    moreContentButtonLabel,
    moreContentButtonLink,
    mainPhotoAlt,
  } = routeData.bio;

  return (
    <StandardSection ref={(el) => createRef('bio', el)} name={title}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <SectionImage>
            <AnimatedPhoto
              image={bioImage}
              imageSmall={bioImageSmall}
              isActive={isActive}
              alt={mainPhotoAlt}
            />
            <CrossElement />
          </SectionImage>
          <SectionContent>
            <Paragraph>{paragraph1}</Paragraph>
            <Paragraph style={{ marginBottom: '50px' }}>{paragraph2}</Paragraph>
          </SectionContent>
        </StandardSectionMain>
        <StandardSectionAside>
          <SectionAsideTop />
          <SectionAsideBottom>
            <MoreContentButton
              href={moreContentButtonLink}
              label={moreContentButtonLabel}
            />
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
