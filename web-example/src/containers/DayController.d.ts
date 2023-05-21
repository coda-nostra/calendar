import React, { ReactElement } from 'react';
export type DayControllerProps = {
    minDate?: Date | undefined;
    maxDate?: Date | undefined;
};
declare function DayController({ children, minDate, maxDate, }: DayControllerProps & IBaseProps): ReactElement;
declare const _default: React.MemoExoticComponent<typeof DayController>;
export default _default;
