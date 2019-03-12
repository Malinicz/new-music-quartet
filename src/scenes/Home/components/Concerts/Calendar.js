import React from 'react';
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

const CalendarItemTickets = styled.div`
  margin-bottom: 15px;
`;

export const Calendar = () => {
  return (
    <CalendarHolder>
      <CalendarItem>
        <CalendarItemTitle>9 stycznia 2020</CalendarItemTitle>
        <CalendarItemPlace>Kraków - Tauron Arena</CalendarItemPlace>
        <CalendarItemTime>Rozpoczęcie 19:00</CalendarItemTime>
        <CalendarItemTickets>Bilety 35zł / 40zł</CalendarItemTickets>
        <ButtonLink label="kup bilety" />
      </CalendarItem>
      <CalendarItem>
        <CalendarItemTitle>19 lutego 2020</CalendarItemTitle>
        <CalendarItemPlace>Warszawa - Sala Kongresowa</CalendarItemPlace>
        <CalendarItemTime>Rozpoczęcie 20:00</CalendarItemTime>
        <CalendarItemTickets>Bilety 40zł / 60zł</CalendarItemTickets>
        <ButtonLink label="kup bilety" />
      </CalendarItem>
    </CalendarHolder>
  );
};
