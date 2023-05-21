import { isSameMonth, subMonths, addMonths, format } from 'date-fns';
import { MONTH_FORMAT, MONTH_ORDER } from '../consts';
import { MonthMap, TopKeysObject } from '../contexts';
import { Month } from '../utils';

type PassingArgs = {
  startingDayIndex: number;
  order: MONTH_ORDER;
};

function calculatePagerPosition(pastMonth?:Month | null): number {
  if (!pastMonth) return 0;
  return 1;
}

function getCalculatedMonth(
  current:Date,
  comparator:Date,
  calcFunc:(arg1:number|Date,arg:number|Date)=>Date,
  rest: PassingArgs,
): Month | null {
  if (
    comparator &&
    (isSameMonth(calcFunc(current, 1), comparator) ||
      isSameMonth(current, comparator))
  )
    return null;
  return new Month({
    date: calcFunc(current, 1),
    startingDay: rest.startingDayIndex,
    order: rest.order,
  });
}

function calculateMinMonth(current:Date, pastScrollRange:number): Date | undefined {
  let out;
  if (pastScrollRange || pastScrollRange === 0)
    out = subMonths(current, pastScrollRange + 1);
  console.log({ out });
  return out;
}

function calculateMaxMonth(current:Date, futureScrollRange:number): Date | undefined {
  let out;
  if (futureScrollRange || futureScrollRange === 0)
    out = addMonths(current, futureScrollRange);
  console.log({ out });
  return out;
}

function getKeys({
  previousMonth,
  currentMonth,
  nextMonth,
}: MonthMap): TopKeysObject {
  return {
    past: `__${
      previousMonth ? format(previousMonth.date, MONTH_FORMAT) : 'no_past__'
    }__`,
    present: `__${format(currentMonth.date, MONTH_FORMAT)}__`,
    future: `__${
      nextMonth ? format(nextMonth.date, MONTH_FORMAT) : 'no_future__'
    }__`,
    viewPager: `${
      previousMonth ? format(previousMonth.date, MONTH_FORMAT) : 'no_past__'
    }_${format(currentMonth.date, MONTH_FORMAT)}_${
      nextMonth ? format(nextMonth.date, MONTH_FORMAT) : 'no_future__'
    }`,
  };
}

export {
  calculatePagerPosition,
  calculateMinMonth,
  calculateMaxMonth,
  getCalculatedMonth,
  getKeys,
};
