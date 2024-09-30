import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalender from "@/components/EventCalender";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const StudentPage = () => {
  return (
    <div className="flex gap-4 p-4 flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule(4A)</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
