"use client"
import React, { useState } from 'react'
import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {

  const [view, setView] = useState<View>(Views.DAY);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView)
  }

  return (
    <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week","day"]}
      view={view}
      style={{ height: '98%' }}
      onView={handleOnChangeView}
      min={new Date(2024,1,1,8,0)}
      max={new Date(2024,1,1,17,0)}
    />
  </div>
  )
}

export default BigCalendar