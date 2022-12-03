import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const currentUser = true;

  return (
    <>
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;




