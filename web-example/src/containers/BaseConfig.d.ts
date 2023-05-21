import React, { ReactElement } from 'react';
import { TWeekDayIndexes } from '../utils/types';
export type BaseConfigProps = {
    startingDay?: number | string | TWeekDayIndexes;
};
declare function BaseConfig({ children, startingDay, }: BaseConfigProps & IBaseProps): ReactElement;
declare const _default: React.MemoExoticComponent<typeof BaseConfig>;
export default _default;
