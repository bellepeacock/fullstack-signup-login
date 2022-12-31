import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendar from 'react-calendar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
// import CalendarComponent from "./components/CalendarComponent"
import Day from './components/Day';
import axios from 'axios';
import { useState } from 'react';
import { logout } from './services/auth';
import { Link, useNavigate } from 'react-router-dom';
import "./css/app.css";

function App() {
  const navigate = useNavigate();
  // const [date, setDate] = useState(new Date());

  const [loggedInUser, setLoggedInUser] = React.useState(null);
  React.useEffect(() => {
    axios.get('api/auth/loggedin')
      .then(response => setLoggedInUser(response.data))
      .catch(err => console.log(err))
  }, [])
  const logoutHandler = () => {
    logout().then(done=>{
      setLoggedInUser(null)
      navigate('/');
    })
  }

  // condition : true ? false
  return (
    <div className="App">
      <h1>{loggedInUser ? loggedInUser.name : ""}</h1>
      {
        loggedInUser ?
        <div>
        {/* <CalendarComponent /> */}
        <button type="button" onClick={ logoutHandler} >Logout</button>
        </div>
        : 
        <div className="navBar">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/login">
          <button>Log in</button>
        </Link>
        </div>
      }
      {/* <div>
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container'>
         <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
         <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
       </p>
      </div> */}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp setLoggedInUser={setLoggedInUser}/>} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser}/>} />
          <Route path="/day" element={<Day />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;