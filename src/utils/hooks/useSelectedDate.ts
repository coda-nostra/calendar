import { isSameDay } from 'date-fns';
import { useContext } from 'react';
import { DayControllerCtx, IDayControllerCtx } from '../../contexts';

export interface IUseSelectedDateReturns {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  isSelected: (date: Date) => boolean;
}
export default function useSelectedDate():IUseSelectedDateReturns {
  const { selectedDate, setSelectedDate, minDate, maxDate } =
    useContext<IDayControllerCtx>(DayControllerCtx);
  const isSelected = (date: Date) => isSameDay(date, selectedDate);
  return { selectedDate, setSelectedDate, minDate, maxDate, isSelected };
}
