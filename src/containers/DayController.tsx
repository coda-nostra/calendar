import { isSameMonth, startOfMonth } from 'date-fns';
import React, {
  memo,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DayControllerCtx, MonthControllerCtx } from '../contexts';

export type DayControllerProps = {
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
};

function DayController({
  children,
  minDate,
  maxDate,
}: DayControllerProps & IBaseProps): ReactElement {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { currentMonth } = useContext(MonthControllerCtx);

  useEffect(() => {
    if (!isSameMonth(new Date(), currentMonth.date)) {
      setSelectedDate(startOfMonth(currentMonth.date));
    } else {
      setSelectedDate(new Date());
    }
  }, [currentMonth]);

  return (
    <DayControllerCtx.Provider
      value={{ selectedDate, setSelectedDate, minDate, maxDate }}
    >
      {children}
    </DayControllerCtx.Provider>
  );
}

export default memo(DayController);
