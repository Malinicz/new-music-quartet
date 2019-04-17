import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object, arrayOf } from 'prop-types';
import styled from 'styles';

import {
  H2,
  SinglePageSectionMain,
  SinglePageSectionHeading,
  SectionHeadingLine,
  SinglePageSectionContent,
  MaxWidthWrapper,
  SinglePageSectionPhoto,
} from 'components/base';
import { SinglePageLayout } from 'components';

import concertsImage from 'assets/concerts.jpg';
import { ConcertsList } from './concertsList';

const ArchiveTitle = styled(H2)`
  margin-top: 150px;
  font-size: 2.5em;
`;

class Concerts extends Component {
  render() {
    const {
      sharedData: { language },
      routeData: { title, emptyListText, mainPhotoAlt, archiveTitle },
      upcomingConcerts,
      recentConcerts,
      history,
    } = this.props;

    return (
      <SinglePageLayout history={history} language={language}>
        <MaxWidthWrapper>
          <SinglePageSectionMain>
            <SinglePageSectionHeading>
              {title}
              <SectionHeadingLine />
            </SinglePageSectionHeading>
            <SinglePageSectionPhoto src={concertsImage} alt={mainPhotoAlt} />
            <SinglePageSectionContent>
              {!upcomingConcerts.length && <H2>{emptyListText}</H2>}
              <div>
                <ConcertsList concerts={upcomingConcerts} {...this.props} />
              </div>
              <div>
                <ArchiveTitle>{archiveTitle}</ArchiveTitle>
                <ConcertsList
                  concerts={recentConcerts}
                  isInThePast
                  {...this.props}
                />
              </div>
            </SinglePageSectionContent>
          </SinglePageSectionMain>
        </MaxWidthWrapper>
      </SinglePageLayout>
    );
  }
}

Concerts.defaultProps = {
  routeData: {},
  sharedData: {},
  upcomingConcerts: [],
  recentConcerts: [],
};

Concerts.propTypes = {
  history: object.isRequired,
  routeData: object,
  sharedData: object,
  upcomingConcerts: arrayOf(object),
  recentConcerts: arrayOf(object),
};

export default withRouteData(Concerts);
