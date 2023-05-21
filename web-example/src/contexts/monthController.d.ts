/// <reference types="react" />
import { Month } from '../utils';
import { MONTH_ORDER } from '../consts';
export type SetMonthFunction<T> = React.Dispatch<React.SetStateAction<T>>;
export type TopKeysObject = {
    past: string;
    present: string;
    future: string;
    viewPager: string;
};
export type MonthMap = {
    currentMonth: Month;
    previousMonth: Month | null;
    nextMonth: Month | null;
};
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
export declare const MonthControllerCtx: import("react").Context<IMonthControllerCtx>;
