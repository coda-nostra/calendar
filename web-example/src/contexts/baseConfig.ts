import { createContext } from 'react';
import { TWeekDayIndexes } from '../utils/types';

export interface IBaseConfigCtx {
  startingDayIndex: TWeekDayIndexes;
}
export const BaseConfigCtx = createContext<IBaseConfigCtx>({
  startingDayIndex: 0,
});
