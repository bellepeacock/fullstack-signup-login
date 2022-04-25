import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import axios from 'axios';




function App() {

  const [loggedInUser, setLoggedInUser] = React.useState(null);
  React.useEffect(() => {
    axios.get('/api/auth/loggedin')
      .then(response => setLoggedInUser(response.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <h1>{loggedInUser ?loggedInUser.name:"" }</h1>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;