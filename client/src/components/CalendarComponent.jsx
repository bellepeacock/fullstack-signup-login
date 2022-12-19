// import Calendar from 'react-google-calendar-api';
// ask user to choose the month and year via dropdown—you don't need to get request the data as you're not looking into the future. 
// get the date from user, need to know which days are marked in red—this could be an array of dates that you pass as month, year.
// Render calendar with month and year—think about how to add new symptoms, will save in db somewhere.

// list days in array
// style array to look like a calendar, using tailwind most likely

// part of jsx so keep the calendar functions in here——

import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import "../css/calendar.css";


const CalendarComponent = () => {
    // const navigate = useNavigate();
    const [date, setDate] = useState(new Date());

    //  need to emulate this, but link to day and add symptoms in place of events https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD
    
    return (
        <div>
          <h1 className='text-center'>React Calendar</h1>
            <div className='calendar-container'>
              <Calendar onChange={setDate} value={date} />
            </div>
            {date.length >= 1 ? (
              <Link to={`${date}_id/day`}>
                <h2>Symptom tracker</h2>
              </Link>
            ) : () }
          <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
           {date.toDateString()}
          </p>
      </div>
    )
};

export default CalendarComponent;
