import React, { useState } from 'react';
import queryString from "query-string";
import './App.css';
import Navbar from "../../navbar/navbar";
function App1({location}) {
    const {name,room}=queryString.parse(location.search);

  return (
    <div className="App1">
        <Navbar name={name} room={room}/>
      
    </div>
  );
}

export default App1;