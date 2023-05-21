import { IMonthControllerCtx, MonthControllerCtx } from 'contexts';
import { useContext } from 'react';

export default function useMonthController() {
  const {
    keys,
    monthForward,
    monthBack,
    pagerPosition,
    currentMonth,
    getByOrder,
    nextMonth,
    previousMonth,
    setCurrentMonth,
    setNextMonth,
    setPreviousMonth,
  } = useContext<IMonthControllerCtx>(MonthControllerCtx);

  return {
    keys,
    monthForward,
    monthBack,
    pagerPosition,
    currentMonth,
    getByOrder,
    nextMonth,
    previousMonth,
    setCurrentMonth,
    setNextMonth,
    setPreviousMonth,
  };
}
