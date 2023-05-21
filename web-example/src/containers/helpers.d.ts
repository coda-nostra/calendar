import { MONTH_ORDER } from '../consts';
import { MonthMap, TopKeysObject } from '../contexts';
import { Month } from '../utils';
type PassingArgs = {
    startingDayIndex: number;
    order: MONTH_ORDER;
};
declare function calculatePagerPosition(pastMonth: any): number;
declare function getCalculatedMonth(current: any, comparator: any, calcFunc: any, rest: PassingArgs): Month | null;
declare function calculateMinMonth(current: any, pastScrollRange: any): Date | undefined;
declare function calculateMaxMonth(current: any, futureScrollRange: any): Date | undefined;
declare function getKeys({ previousMonth, currentMonth, nextMonth, }: MonthMap): TopKeysObject;
export { calculatePagerPosition, calculateMinMonth, calculateMaxMonth, getCalculatedMonth, getKeys, };
