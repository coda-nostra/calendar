import React, { memo, ReactElement } from 'react';
import { useMonthController, useSelectedDate } from 'utils/hooks';
import { format } from 'date-fns';

export type CalendarProps = {};

function Calendar(props: CalendarProps): ReactElement {
  const {
    currentMonth,
    monthForward,
    monthBack,
    keys: { future, past, present },
  } = useMonthController();
  const { setSelectedDate, isSelected } = useSelectedDate();
  return (
    <div className="Calendar">
      <div className="Calendar__header">
        <div
          className="Calendar__header_button"
          onClick={() => monthBack()}
          key={past}
        >
          Prev
        </div>
        <div className="Calendar__header_title" key={present}>
          {format(currentMonth.date, 'dd-MM-yyyy')}
        </div>
        <div
          className="Calendar__header_button"
          onClick={() => monthForward()}
          key={future}
        >
          Next
        </div>
      </div>
      <div className="Calendar__body">
        <div className="Calendar__week" key={'days'}>
          {currentMonth.weekDays.map(weekDay => (
            <div className="Calendar__weekDay" key={weekDay}>
              {weekDay}
            </div>
          ))}
        </div>
        {currentMonth.weeks.map((week, i) => {
          return (
            <div className="Calendar__week" key={i}>
              {week.days.map((day, j) => {
                return (
                  <div
                    className={`Calendar__day ${
                      isSelected(day.date) ? '__selected' : ''
                    }`}
                    onClick={() => setSelectedDate(day.date)}
                    key={j}
                  >
                    {day.date.getDate()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Calendar);
