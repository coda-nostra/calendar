import React, {
  memo,
  ReactElement,
  ReactComponentElement,
  ReactNode,
} from 'react';
import DayController, { DayControllerProps } from './DayController';
import MonthController, { MonthControllerProps } from './MonthController';
import BaseConfig, { BaseConfigProps } from './BaseConfig';
import { parseDay } from '../utils';
import { EventsControllerProps, EventsController } from './EventsController';
import { JsxElement } from 'typescript';

export type WrapperProps = BaseConfigProps &
  IBaseProps &
  DayControllerProps &
  MonthControllerProps &
  EventsControllerProps & {
    minDate?: Date | undefined | string;
    maxDate?: Date | undefined | string;
    children?: ReactNode;
  };

function Wrapper(props: WrapperProps): ReactElement {
  const {
    startingDay,
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

/*
<CalendarDimensions key="CalendarDimensions-providerComponents">
            <AgendaListWrapper key="AgendaListWrapper-providerComponents">
              {children}
            </AgendaListWrapper>
          </CalendarDimensions>
*/
