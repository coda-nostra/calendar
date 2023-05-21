import React, { ReactElement } from 'react';
export type MonthControllerProps = {
    pastScrollRange?: number;
    futureScrollRange?: number;
    initialDate?: Date;
};
declare function MonthController({ children, futureScrollRange, pastScrollRange, initialDate, }: MonthControllerProps & IBaseProps): ReactElement;
declare const _default: React.MemoExoticComponent<typeof MonthController>;
export default _default;
