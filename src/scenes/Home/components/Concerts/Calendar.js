import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import styled from 'styles';

import { ButtonLink } from 'components';

const CalendarHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const CalendarItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-bottom: 50px;
`;

const CalendarItemTitle = styled.div`
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 30px;
`;

const CalendarItemPlace = styled.div`
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 5px;
`;

const CalendarItemTime = styled.div`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 15px;
`;

export const Calendar = ({ calendarEvents = [], linkLabel }) => {
  return (
    <CalendarHolder>
      {calendarEvents.map((event) => {
        return (
          <CalendarItem key={`${event.date}-${event.time}`}>
            <CalendarItemTitle>{event.date}</CalendarItemTitle>
            <CalendarItemPlace>{event.place}</CalendarItemPlace>
            <CalendarItemTime>{event.time}</CalendarItemTime>
            <ButtonLink label={linkLabel} href={event.url} target="_blank" />
          </CalendarItem>
        );
      })}
    </CalendarHolder>
  );
};

Calendar.propTypes = {
  calendarEvents: arrayOf(object).isRequired,
  linkLabel: string.isRequired,
};
