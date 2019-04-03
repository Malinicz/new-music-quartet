import React from 'react';
import { withRouteData } from 'react-static';
import { object, arrayOf } from 'prop-types';

import {
  StandardSection,
  StandardSectionMain,
  SectionHeading,
  SectionHeadingLine,
  MaxWidthWrapper,
} from 'components/base';
import { PhotoGallery } from './PhotoGallery';
import { VideoGallery } from './VideoGallery';

export const Media = withRouteData(({ routeData, videos }) => {
  const { title, photoLinkAriaLabel } = routeData.media;

  return (
    <StandardSection name={title}>
      <MaxWidthWrapper>
        <StandardSectionMain>
          <SectionHeading>
            {title} <SectionHeadingLine />
          </SectionHeading>
          <PhotoGallery photoLinkAriaLabel={photoLinkAriaLabel} />
          <VideoGallery videos={videos} />
        </StandardSectionMain>
      </MaxWidthWrapper>
    </StandardSection>
  );
});

Media.defaultProps = {
  routeData: {},
  videos: [],
};

Media.propTypes = {
  routeData: object,
  videos: arrayOf(object),
};
