import React from 'react';
import moment from 'moment';
import styled from 'styles';
import { object, arrayOf, bool } from 'prop-types';

import { MoreContentButton } from 'components';

const ConcertHolder = styled.div`
  padding-top: 30px;
  padding-bottom: ${({ isInThePast }) => (isInThePast ? 0 : '60px')};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.bright}`};
  opacity: ${({ isInThePast }) => (isInThePast ? 0.5 : 1)};

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

export const ConcertsList = ({
  concerts,
  isInThePast,
  sharedData: { language },
  routeData: { programTitle, buttonLabelEventSite },
}) => {
  return concerts.map((event, index) => {
    const pieces = event.pieces.split('\n');

    return (
      <ConcertHolder key={index} isInThePast={isInThePast}>
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
        {!isInThePast && (
          <MoreContentButton
            label={buttonLabelEventSite}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
      </ConcertHolder>
    );
  });
};

ConcertsList.defaultProps = {
  routeData: {},
  sharedData: {},
  concerts: [],
  isInThePast: false,
};

ConcertsList.propTypes = {
  routeData: object,
  sharedData: object,
  concerts: arrayOf(object),
  isInThePast: bool,
};
