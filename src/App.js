import React from 'react';
import { useState, useEffect } from 'react';
import Topbar from './Components/Topbar/Topbar';
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <>
    <Topbar/>
    <Home/>
    <Register/>
   
    </>
  );
}

export default App;




