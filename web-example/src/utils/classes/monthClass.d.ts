import { MONTH_ORDER } from '../../consts';
import { DateComponent, IDateComponent } from './classHelpers';
import { EWEEK_DAYS } from '../types';
import { Day } from './dayClass';
import { Week } from './weekClass';
export interface IMonthClass extends IDateComponent {
    startingDay: string | number | undefined;
    order: MONTH_ORDER;
}
export declare class Month extends DateComponent {
    #private;
    startingDay: number;
    weeks: Week[];
    order: MONTH_ORDER;
    label: string;
    constructor(data: IMonthClass);
    constructWeeks: () => void;
    get numberOfWeeks(): number;
    get days(): Day[];
    get weekDays(): EWEEK_DAYS[];
}
