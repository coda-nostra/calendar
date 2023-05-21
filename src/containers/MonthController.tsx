import { subMonths, addMonths, /* , format, isSameMonth  */ 
subYears,
addYears} from 'date-fns';
import React, { memo, ReactElement, useState, useContext } from 'react';
import { MONTH_ORDER /* , MONTH_FORMAT */ } from '../consts';
import { MonthControllerCtx, BaseConfigCtx } from '../contexts';
import { Month } from '../utils';
import {
  calculateMinMonth,
  calculateMaxMonth,
  getCalculatedMonth,
  calculatePagerPosition,
  getKeys,
} from './helpers';

export interface MonthControllerProps {
  // minMonth?: Date | undefined;
  // maxMonth?: Date | undefined;
  pastScrollRange?: number;
  futureScrollRange?: number;
  initialDate?: Date;
}

function MonthController({
  children,
  futureScrollRange,
  pastScrollRange,
  initialDate = new Date(),
}: MonthControllerProps & IBaseProps): ReactElement {
  const { startingDayIndex } = useContext(BaseConfigCtx);
  const [currentMonth, setCurrentMonth] = useState<Month>(
    new Month({
      date: initialDate,
      startingDay: startingDayIndex,
      order: MONTH_ORDER.PRESENT,
    }),
  );

  const [finalMinMonth] = useState(
    calculateMinMonth(currentMonth.date, pastScrollRange ?? 0),
  );
  const [finalMaxMonth] = useState(
    calculateMaxMonth(currentMonth.date, futureScrollRange ?? 0));
  // console.log({
  //   finalMinMonth,
  //   finalMaxMonth,
  //   calcedMax: calculateMaxMonth(currentMonth.date, futureScrollRange ?? 0),
  // });

  const [previousMonth, setPreviousMonth] = useState<Month | null>(
    // @ts-expect-error subMonths is compatible
    getCalculatedMonth(currentMonth.date, finalMinMonth|| subYears(currentMonth.date, 100), subMonths, {
      order: MONTH_ORDER.PAST,
      startingDayIndex,
    }),
  );
  const [nextMonth, setNextMonth] = useState<Month | null>(
    // @ts-expect-error addMonths is compatible
    getCalculatedMonth(currentMonth.date, finalMaxMonth || addYears(currentMonth.date, 100), addMonths, {
      order: MONTH_ORDER.FUTURE,
      startingDayIndex,
    }),
  );

  const [pagerPosition, setPagerPosition] = useState<number>(
    calculatePagerPosition(previousMonth),
  );

  const setNewValues = (past:Month|null, present:Month, future:Month|null): void => {
    setPreviousMonth(past);
    setCurrentMonth(present);
    setNextMonth(future);
    setPagerPosition(calculatePagerPosition(past));
  };

  const monthForward = (): void => {
    // console.log('%c @MonthController/monthForward', 'color:#f00', {
    //   currentMonth,
    //   previousMonth,
    //   nextMonth,
    // });
    if (!nextMonth) return;
    const newFuture = getCalculatedMonth(
      nextMonth.date,
      finalMaxMonth || addYears(currentMonth.date, 100),
      // @ts-expect-error addMonths is compatible
      addMonths,
      { order: MONTH_ORDER.FUTURE, startingDayIndex },
    );
    // if (newFuture === null) return;
    const newCurrent = nextMonth;
    newCurrent.order = MONTH_ORDER.PRESENT;
    const newPast = currentMonth;
    newPast.order = MONTH_ORDER.PAST;
    setNewValues(newPast, newCurrent, newFuture);
  };
  const monthBack = (): void => {
    // console.log('%c @MonthController/monthBack', 'color:#f00');
    if (!previousMonth) return;
    
    const newPast = getCalculatedMonth(
      previousMonth.date,
      finalMinMonth|| subYears(currentMonth.date, 100),
      // @ts-expect-error subMonths is compatible
      subMonths,
      { order: MONTH_ORDER.PAST, startingDayIndex },
    );
    // console.log({ newPast });
    // if (newPast === null) return;
    const newCurrent = previousMonth;
    newCurrent.order = MONTH_ORDER.PRESENT;
    const newFuture = currentMonth;
    newFuture.order = MONTH_ORDER.FUTURE;
    setNewValues(newPast, newCurrent, newFuture);
  };

  const getByOrder = (order: MONTH_ORDER): Month | null => {
    switch (order) {
      case MONTH_ORDER.PAST:
        return previousMonth;
      case MONTH_ORDER.PRESENT:
        return currentMonth;
      case MONTH_ORDER.FUTURE:
        return nextMonth;
      default:
        return currentMonth;
    }
  };

  console.groupCollapsed('MonthController');
  console.log({
    currentMonth,
    previousMonth,
    nextMonth,
    monthForward,
    monthBack,
    getByOrder,
    keys: getKeys({ currentMonth, nextMonth, previousMonth }),
    futureScrollRange,
    pastScrollRange,
    finalMaxMonth,
    finalMinMonth,
  });
  console.groupEnd();
  return (
    <MonthControllerCtx.Provider
      value={{
        currentMonth,
        setCurrentMonth,
        previousMonth,
        setPreviousMonth,
        nextMonth,
        setNextMonth,
        monthForward,
        monthBack,
        getByOrder,
        keys: getKeys({ currentMonth, nextMonth, previousMonth }),
        pagerPosition,
      }}
    >
      {children}
    </MonthControllerCtx.Provider>
  );
}

export default memo(MonthController);
