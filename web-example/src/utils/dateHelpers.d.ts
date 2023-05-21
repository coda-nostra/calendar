import { EWEEK_DAYS, TWeekDayIndexes } from './types';
declare function asWeekDay(day: string): EWEEK_DAYS;
declare function getIndexForUnknown(day: string | number | undefined): number;
declare function getWeekDaysFromIndex(index: TWeekDayIndexes): Array<string>;
declare function getWeekDays(startFrom?: string | EWEEK_DAYS): Array<string>;
declare function getShortName(day: string): string;
declare function getDayIndex(day: string | EWEEK_DAYS): TWeekDayIndexes;
declare function parseAndInvalidateDate(date: any, format: any, refDate: any): Date;
declare function parseMonth(date: any): Date | undefined;
declare function parseDay(date: any): Date | undefined;
declare function isWithinInterval(date: any, minDate: any, maxDate: any): boolean;
export { asWeekDay, getIndexForUnknown, getWeekDaysFromIndex, getWeekDays, getShortName, getDayIndex, parseAndInvalidateDate, parseMonth, parseDay, isWithinInterval, };
