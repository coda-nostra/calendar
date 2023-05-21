import { ComponentType, ReactElement } from 'react';
export declare enum EWEEK_DAYS {
    SUNDAY = "sunday",
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday"
}
export type TWeekDayIndexes = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Callback<T> = (data: T) => void;
export type LockCallback = (T: boolean, caller: LockingAction) => void;
export interface LockingAction {
    lock: () => void;
    unlock: () => void;
    onLockListener: (callback: LockCallback) => void;
    onViewableItemsChanged: (any: any) => void;
    onScroll: (any: any) => void;
    onScrollBeginDrag: (any: any) => void;
    onMomentumScrollEnd: (any: any) => void;
    onScrollEndDrag: (any: any) => void;
    onMomentumScrollBegin: (any: any) => void;
}
export type RenderFunction = (props: any) => ReactElement;
type RenderComponent = ComponentType<any>;
export type RenderProp = RenderFunction | RenderComponent;
export type CalendarEvent = {
    title: string;
    startTime: Date;
    endTime?: Date;
    allDay?: boolean;
    data: any;
    duration?: number;
};
export type ParsedCalendarEvent = CalendarEvent & {
    multiday?: boolean;
    duration: number;
    key: string;
};
export {};
