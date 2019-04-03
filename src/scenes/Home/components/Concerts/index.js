import React from 'react';
import { withRouteData } from 'react-static';
import { object, arrayOf } from 'prop-types';
import moment from 'moment';

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
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';
import { Calendar } from './Calendar';

import concertsImage from 'assets/concerts.jpg';
import concertsImageSmall from 'assets/concerts-small.jpg';

export const Concerts = withRouteData(
  ({ routeData, sharedData: { language }, concerts, createRef, isActive }) => {
    const {
      title,
      moreContentButtonLink,
      moreContentButtonLabel,
      eventDetailsText,
      eventTimePrefix,
      mainPhotoAlt,
    } = routeData.concerts;

    const calendarEvents = concerts
      .map((concert) => ({
        date: moment(concert.date)
          .locale(language)
          .format('LL'),
        place: `${concert.city}, ${concert.country}`,
        time: `${eventTimePrefix} ${concert.time}`,
        url: concert.url,
      }))
      .filter((concert, index) => index < 2);

    return (
      <StandardSection ref={(el) => createRef('concerts', el)} name={title}>
        <MaxWidthWrapper flexDirection="row-reverse">
          <StandardSectionMain>
            <SectionHeading>
              {title} <SectionHeadingLine />
            </SectionHeading>
            <SectionImage>
              <AnimatedPhoto
                image={concertsImage}
                imageSmall={concertsImageSmall}
                isActive={isActive}
                alt={mainPhotoAlt}
              />
              <CrossElement left />
            </SectionImage>
            <SectionContent>
              <Calendar
                linkLabel={eventDetailsText}
                calendarEvents={calendarEvents}
              />
            </SectionContent>
          </StandardSectionMain>
          <StandardSectionAside>
            <SectionAsideTop />
            <SectionAsideBottom>
              <MoreContentButton
                label={moreContentButtonLabel}
                href={moreContentButtonLink}
              />
            </SectionAsideBottom>
          </StandardSectionAside>
        </MaxWidthWrapper>
      </StandardSection>
    );
  }
);

Concerts.defaultProps = {
  routeData: {},
  sharedData: {},
  concerts: [],
};

Concerts.propTypes = {
  routeData: object,
  sharedData: object,
  concerts: arrayOf(object),
};
