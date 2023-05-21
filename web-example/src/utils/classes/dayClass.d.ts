import { DateComponent, IDateComponent } from './classHelpers';
export interface IDayClass extends IDateComponent {
}
export declare class Day extends DateComponent {
    label: string;
    constructor(data: IDayClass);
}
