"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];


const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='font-semibold mt-4 mb-2 text-lg'>Events</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20}/>
        </div>
        <div className='flex flex-col gap-4'>
            {
                events.map((event) => (
                    <div className='p-4 rounded-md border border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}> 
                        <div className='flex items-center justify-between'>
                            <h1 className='font-sans text-gray-700'>{event.title}</h1>
                            <span className='text-[11px] text-gray-300'>{event.time}</span>
                        </div>
                        <div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    );
}

export default EventCalender