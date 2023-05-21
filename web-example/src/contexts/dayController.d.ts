import { Callback } from '../utils/types';
export type DayControllerPassedProps = {
    onDateSelected?: Callback<Date>;
};
export interface IDayControllerCtx {
    selectedDate: Date;
    setSelectedDate: (newDate: Date) => void;
    minDate: Date | undefined;
    maxDate: Date | undefined;
}
export declare const DayControllerCtx: import("react").Context<IDayControllerCtx>;
