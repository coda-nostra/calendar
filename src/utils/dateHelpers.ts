/* eslint-disable @typescript-eslint/naming-convention */
import { isAfter, isBefore, parse, set } from 'date-fns';
import invariant from 'ts-invariant';
import { DAY_FORMAT, MONTH_FORMAT } from '../consts';
import { EWEEK_DAYS, TWeekDayIndexes } from './types';

function asWeekDay(day: string): EWEEK_DAYS{
  const wdIndex = Object.keys(EWEEK_DAYS).indexOf(day.toUpperCase());
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  invariant(wdIndex !== -1, 'asWeekDay:Not a week day');
  const wkv = Object.keys(EWEEK_DAYS)[wdIndex];
  console.log('asWeekDay', day, wkv,wdIndex);
  if(wdIndex>=0)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return EWEEK_DAYS[wkv as keyof typeof EWEEK_DAYS];
  else return EWEEK_DAYS.MONDAY;
}

function getIndexForUnknown(day: string | number | undefined): number {
  if ((day || day === 0) && typeof day === 'number' && day < 7 && day >= 0) {
    return day;
  }
  if (
    day &&
    Object.keys(EWEEK_DAYS).indexOf((day as string).toUpperCase()) !== -1
  ) {
    return Object.keys(EWEEK_DAYS).indexOf((day as string).toUpperCase());
  }
  return 0;
}

function getWeekDaysFromIndex(index: TWeekDayIndexes): Array<string> {
  // const index = Object.values(EWEEK_DAYS).indexOf(asWeekDay(startFrom));
  const before: Array<string> = [];
  const after: Array<string> = [];
  Object.values(EWEEK_DAYS).forEach((day: EWEEK_DAYS, i) => {
    if (i >= index) before.push(day);
    else after.push(day);
  });
  console.log('getWeekDaysFromIndex', index, before.concat(after));
  return before.concat(after);
}

function getWeekDays(
  startFrom: string | EWEEK_DAYS = EWEEK_DAYS.MONDAY,
): Array<string> {
  const index = (
    Object.values(EWEEK_DAYS).indexOf(asWeekDay(startFrom))
  );
  // console.log('getWeekDays', getWeekDaysFromIndex(index));
  return getWeekDaysFromIndex(index as TWeekDayIndexes);
}

function getShortName(day: string): string {
  return day[0].toUpperCase() + day.substring(1, 3);
}
//
function getDayIndex(day: string | EWEEK_DAYS): TWeekDayIndexes {
  const wdIndex = Object.keys(EWEEK_DAYS).indexOf(day.toUpperCase());
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  invariant(
    wdIndex >= 0 || wdIndex <= 6,
    `getDayIndex:Not a week day${wdIndex}`,
  );
  return wdIndex as TWeekDayIndexes;
}

function parseAndInvalidateDate(date:Date, format:string, refDate:Date): Date {
  if (date instanceof Date) return date;
  try {
    return parse(date, format, refDate);
  } catch {
    throw new Error(
      `Possible wrong date format. Accepting: ${MONTH_FORMAT} or ${DAY_FORMAT}`,
    );
  }
}

function parseMonth(date:Date): Date | undefined {
  if (!date) return undefined;
  return parseAndInvalidateDate(
    date,
    MONTH_FORMAT,
    set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
  );
}

function parseDay(date?:Date): Date | undefined {
  if (!date) return undefined;
  return parseAndInvalidateDate(
    date,
    DAY_FORMAT,
    set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
  );
}

function isWithinInterval(date:Date, minDate:Date, maxDate:Date): boolean {
  if (minDate && isBefore(date, minDate)) return false;
  if (maxDate && isAfter(date, maxDate)) return false;
  return true;
}

export {
  asWeekDay,
  getIndexForUnknown,
  getWeekDaysFromIndex,
  getWeekDays,
  getShortName,
  getDayIndex,
  parseAndInvalidateDate,
  parseMonth,
  parseDay,
  isWithinInterval,
};
