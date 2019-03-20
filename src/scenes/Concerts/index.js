import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object, arrayOf } from 'prop-types';
import styled from 'styles';
import moment from 'moment';

import {
  H2,
  SinglePageSectionMain,
  SinglePageSectionHeading,
  SectionHeadingLine,
  SinglePageSectionContent,
  MaxWidthWrapper,
  SinglePageSectionPhoto,
} from 'components/base';
import { SinglePageLayout, MoreContentButton } from 'components';

import mainPhoto from 'assets/concerts.jpg';

const ConcertHolder = styled.div`
  padding: 30px 0 60px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.bright}`};

  &:last-child {
    border-bottom: none;
  }
`;

const Date = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
`;

const Venue = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const Place = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const PiecesTitle = styled.div`
  margin: 30px 0;
  font-weight: bold;
`;

const Pieces = styled.ul`
  padding: 0 15px;
  margin-bottom: 60px;
`;
const Piece = styled.li`
  margin-bottom: 5px;
`;

class Concerts extends Component {
  render() {
    const {
      sharedData: { language },
      routeData: { title, programTitle, buttonLabelEventSite, emptyListText },
      concerts,
      history,
    } = this.props;

    const upcomingEvents = concerts.filter(
      (concert) =>
        moment(concert.date)
          .endOf('day')
          .valueOf() >= moment().valueOf()
    );

    return (
      <SinglePageLayout history={history} language={language}>
        <MaxWidthWrapper>
          <SinglePageSectionMain>
            <SinglePageSectionHeading>
              {title}
              <SectionHeadingLine />
            </SinglePageSectionHeading>
            <SinglePageSectionPhoto src={mainPhoto} />
            <SinglePageSectionContent>
              {upcomingEvents.map((event, index) => {
                const pieces = event.pieces.split('\n');

                return (
                  <ConcertHolder key={index}>
                    <Date>
                      {`${moment(event.date)
                        .locale(language)
                        .format('LL')}, ${event.time}`}
                    </Date>
                    <Venue>{event.venue}</Venue>
                    <Place>{`${event.city}, ${event.country}`}</Place>
                    <PiecesTitle>{programTitle}</PiecesTitle>
                    <Pieces>
                      {pieces.map((piece) => (
                        <Piece key={piece}>{piece}</Piece>
                      ))}
                    </Pieces>
                    <MoreContentButton
                      label={buttonLabelEventSite}
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </ConcertHolder>
                );
              })}
              {!upcomingEvents.length && <H2>{emptyListText}</H2>}
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
  concerts: [],
};

Concerts.propTypes = {
  history: object.isRequired,
  routeData: object,
  sharedData: object,
  concerts: arrayOf(object),
};

export default withRouteData(Concerts);
