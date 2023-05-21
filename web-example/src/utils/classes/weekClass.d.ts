import { DateComponent, IDateComponent } from './classHelpers';
import { Day } from './dayClass';
export interface IWeekClass extends IDateComponent {
}
export declare class Week extends DateComponent {
    days: Day[];
    constructor(data: IWeekClass);
    constructWeek: () => void;
}
