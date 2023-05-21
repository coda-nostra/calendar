import { ReactElement } from 'react';
import { CalendarEvent } from '../utils/types';
export type EventsControllerProps = {
    events: CalendarEvent[];
};
export declare function EventsController({ events, children, }: EventsControllerProps & IBaseProps): ReactElement;
