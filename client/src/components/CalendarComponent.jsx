// import Calendar from 'react-google-calendar-api';
// ask user to choose the month and year via dropdown—you don't need to get request the data as you're not looking into the future. 
// get the date from user, need to know which days are marked in red—this could be an array of dates that you pass as month, year.
// Render calendar with month and year—think about how to add new symptoms, will save in db somewhere.

// list days in array
// style array to look like a calendar, using tailwind most likely

// part of jsx so keep the calendar functions in here——

//  need to emulate this, but link to day and add symptoms in place of events https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD

// Put the symptoms on the other side of  the pg (split into two) wheere it says what the date is


import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userSymptoms } from "./Day";
import 'react-calendar/dist/Calendar.css';
import "../css/calendar.css";

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
          <h1 className='text-center'>React Calendar</h1>
            <div className='calendar-container'>
              <Calendar onChange={setDate} value={date} onClickDay={(day) => console.log(day) }  />
            </div>

            <div>
            {date.length >= [1] ? (
              <p className="text-area">
                <h2>Track your symptoms</h2>
                <Link to="./Day">{date}</Link>
              </p>
            ) : (
              <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                 {date.toDateString()}
              </p>
            )}
            </div>
        </div>
    )
};

export default CalendarComponent;
