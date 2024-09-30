"use client"
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  return (
    <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  )
}

export default BigCalendar