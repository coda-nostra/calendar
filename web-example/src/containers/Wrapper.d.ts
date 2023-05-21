import React, { ReactElement, ReactNode } from 'react';
import { DayControllerProps } from './DayController';
import { MonthControllerProps } from './MonthController';
import { BaseConfigProps } from './BaseConfig';
import { EventsControllerProps } from './EventsController';
export type WrapperProps = BaseConfigProps & IBaseProps & DayControllerProps & MonthControllerProps & EventsControllerProps & {
    minDate?: Date | undefined | string;
    maxDate?: Date | undefined | string;
    children?: ReactNode;
};
declare function Wrapper(props: WrapperProps): ReactElement;
declare const _default: React.MemoExoticComponent<typeof Wrapper>;
export default _default;
