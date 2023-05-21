// import { isSameDay } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { IEventsControllerCtx, EventsControllerCtx } from '../../contexts';
import { CalendarEvent } from '../types';
import useSelectedDate from './useSelectedDate';

export default function useEventsForSelectedDay() {
  const { getEventsForDate } = useContext<IEventsControllerCtx>(
    EventsControllerCtx
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { selectedDate } = useSelectedDate();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  useEffect(() => {
    setEvents(getEventsForDate(selectedDate));
  }, [selectedDate]);
  return events;
}
