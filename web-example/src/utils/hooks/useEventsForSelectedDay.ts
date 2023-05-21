import { IEventsControllerCtx, EventsControllerCtx } from 'contexts';
import { isSameDay } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import useSelectedDate from './useSelectedDate';
import { CalendarEvent } from 'utils/types';

export default function useEventsForSelectedDay() {
  const { getEventsForDate } =
    useContext<IEventsControllerCtx>(EventsControllerCtx);
  const { selectedDate } = useSelectedDate();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  useEffect(() => {
    setEvents(getEventsForDate(selectedDate));
  }, [selectedDate]);
  return events;
}
