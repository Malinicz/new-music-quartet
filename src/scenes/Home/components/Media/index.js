import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';

import {
  StandardSection,
  StandardSectionMain,
  SectionHeading,
  SectionHeadingLine,
  MaxWidthWrapper,
} from 'components/base';
import { PhotoGallery } from './PhotoGallery';

export const Media = withRouteData(({ routeData }) => {
  const { title } = routeData.media;

  return (
    <StandardSection name={title}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <PhotoGallery />
        </StandardSectionMain>
      </MaxWidthWrapper>
    </StandardSection>
  );
});

Media.defaultProps = {
  routeData: {},
};

Media.propTypes = {
  routeData: object,
};
