import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import Home from './Pages/Home/Home';
//import Settings from './Pages/Settings/Settings';
//import Single from './Pages/Single/Single';
//import Write from './Pages/Write/Write';
//import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const currentUser = true;

  return (
    <>
    <div>
        <Link to="/">Home</Link> |<Link to="/register">Register</Link>
        <Topbar />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>page not found!</div>}></Route>
      </Routes>
    </>
  );
}

export default App;




