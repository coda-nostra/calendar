import { ParsedCalendarEvent } from '../utils/types';
export interface IEventsControllerCtx {
    getEventsForDate: (date: Date) => ParsedCalendarEvent[];
}
export declare const EventsControllerCtx: import("react").Context<IEventsControllerCtx>;
