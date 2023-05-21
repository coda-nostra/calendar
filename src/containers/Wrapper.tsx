import React, {
  memo,
  ReactElement,
} from 'react';
import { parseDay } from '../utils';
import BaseConfig, { BaseConfigProps } from './BaseConfig';
import DayController, { DayControllerProps } from './DayController';
import { EventsControllerProps, EventsController } from './EventsController';
import MonthController, { MonthControllerProps } from './MonthController';

export type WrapperProps = BaseConfigProps &
  IBaseProps &
  DayControllerProps &
  MonthControllerProps &
  EventsControllerProps;

function Wrapper(props: WrapperProps): ReactElement {
  const {
    startingDay,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    children,
    minDate,
    maxDate,
    pastScrollRange,
    futureScrollRange,
    events = [],
  } = props;
  return (
    <BaseConfig startingDay={startingDay} key="BaseConfig-providerComponents">
      <MonthController
        key="MonthController-providerComponents"
        pastScrollRange={pastScrollRange}
        futureScrollRange={futureScrollRange}
      >
        <DayController
          key="DayController-providerComponents"
          minDate={parseDay(minDate)}
          maxDate={parseDay(maxDate)}
        >
          <EventsController events={events}>{children}</EventsController>
        </DayController>
      </MonthController>
    </BaseConfig>
  );
}

export default memo(Wrapper);
