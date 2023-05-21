import { useContext } from 'react';
import { DayControllerCtx, IDayControllerCtx } from 'contexts';
import { isSameDay } from 'date-fns';

export default function useSelectedDate() {
  const { selectedDate, setSelectedDate, minDate, maxDate } =
    useContext<IDayControllerCtx>(DayControllerCtx);
  const isSelected = (date: Date) => isSameDay(date, selectedDate);
  return { selectedDate, setSelectedDate, minDate, maxDate, isSelected };
}
