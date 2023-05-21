import React from 'react';
import 'style.scss';
import Wrapper from './containers/Wrapper';
import Calendar from 'Calendar';
import Agenda from 'Agenda';
import { CalendarEvent } from 'utils/types';
import { set, addDays } from 'date-fns';

function generateEvents(): CalendarEvent[] {
  return [
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 10, minutes: 0 }),
      endTime: set(new Date(), { hours: 10, minutes: 15 }),
      allDay: false,
      data: {},
      // duration: 15,
    },
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 10, minutes: 0 }),
      endTime: set(new Date(), { hours: 10, minutes: 30 }),
      allDay: false,
      data: {},
      // duration: 15,
    },
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 10, minutes: 0 }),
      endTime: addDays(set(new Date(), { hours: 10, minutes: 30 }), 1),
      allDay: false,
      data: {},
      // duration: 15,
    },
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 12, minutes: 0 }),
      endTime: set(new Date(), { hours: 12, minutes: 45 }),
      allDay: false,
      data: {},
      // duration: 15,
    },
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 13, minutes: 0 }),
      endTime: set(new Date(), { hours: 13, minutes: 55 }),
      allDay: false,
      data: {},
      // duration: 15,
    },
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 15, minutes: 15 }),
      endTime: set(new Date(), { hours: 16, minutes: 25 }),
      allDay: false,
      data: {},
      // duration: 15,
    },
    {
      title: 'test1',
      startTime: set(new Date(), { hours: 19, minutes: 35 }),
      endTime: set(new Date(), { hours: 21, minutes: 55 }),
      allDay: false,
      data: {},
      // duration: 15,
    },
  ];
}

export default function App() {
  return (
    <Wrapper
      // pastScrollRange={0}
      // futureScrollRange={0}
      startingDay={1}
      events={generateEvents()}
    >
      <Calendar />
      <Agenda />
    </Wrapper>
  );
}
