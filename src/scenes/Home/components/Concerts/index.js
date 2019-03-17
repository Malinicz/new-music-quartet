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
  BackgroundLetter,
  MaxWidthWrapper,
} from 'components/base';
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';
import { Calendar } from './Calendar';

import image from 'assets/concerts.jpg';

export const Concerts = withRouteData(
  ({ routeData, sharedData: { language }, concerts, createRef, isActive }) => {
    const {
      title,
      backgroundLetter,
      moreContentButtonLabel,
      eventDetailsText,
      eventTimePrefix,
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
              <AnimatedPhoto image={image} isActive={isActive} />
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
            <SectionAsideTop>
              <BackgroundLetter x={0} y={50} isActive={isActive}>
                {backgroundLetter}
              </BackgroundLetter>
            </SectionAsideTop>
            <SectionAsideBottom>
              <MoreContentButton
                label={moreContentButtonLabel}
                href="/koncerty"
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
