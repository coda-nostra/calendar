/* eslint-disable @typescript-eslint/no-empty-function */
import { subMonths, addMonths } from 'date-fns';
import { createContext } from 'react';
import { MONTH_ORDER } from '../consts';
import { Month } from '../utils/classes';

export type SetMonthFunction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface TopKeysObject {
  past: string;
  present: string;
  future: string;
  viewPager: string;
}

export interface MonthMap {
  currentMonth: Month;
  previousMonth: Month | null;
  nextMonth: Month | null;
}

export interface IMonthControllerCtx extends MonthMap {
  setCurrentMonth: SetMonthFunction<Month>;

  setPreviousMonth: SetMonthFunction<Month | null>;

  setNextMonth: SetMonthFunction<Month | null>;
  monthForward: () => void;
  monthBack: () => void;
  getByOrder: (order: MONTH_ORDER) => Month | null;
  keys: TopKeysObject;
  pagerPosition: number;
}
export const MonthControllerCtx = createContext<IMonthControllerCtx>({
  currentMonth: new Month({
    date: new Date(),
    startingDay: 0,
    order: MONTH_ORDER.PRESENT,
  }),
  setCurrentMonth: (): void => {},
  previousMonth: new Month({
    date: subMonths(new Date(), 1),
    startingDay: 0,
    order: MONTH_ORDER.PAST,
  }),
  setPreviousMonth: (): void => {},
  nextMonth: new Month({
    date: addMonths(new Date(), 1),
    startingDay: 0,
    order: MONTH_ORDER.FUTURE,
  }),
  setNextMonth: (): void => {},
  monthForward: (): void => {},
  monthBack: (): void => {},
  getByOrder: (): Month =>
    new Month({ date: new Date(), startingDay: 0, order: MONTH_ORDER.PRESENT }),
  keys: {
    past: '',
    present: '',
    future: '',
    viewPager: 'defaultPagerKey',
  },
  pagerPosition: 1,
});
