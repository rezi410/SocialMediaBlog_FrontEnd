import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from "./components/NotFound";
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;




