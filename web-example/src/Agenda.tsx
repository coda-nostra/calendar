import React, { memo, ReactElement } from 'react';
import { useEventsForSelectedDay } from 'utils';

export type AgendaProps = {};

function Agenda(props: AgendaProps): ReactElement {
  const events = useEventsForSelectedDay();
  console.log({ events });
  return <div></div>;
}

export default memo(Agenda);
