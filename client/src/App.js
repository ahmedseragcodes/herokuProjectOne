import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


function url(path){
  return process.env.NODE_ENV === "development"
  ? `http://localhost:1234${path}` : path
}


function App() {

const [data, setData]=useState("Hi");

useEffect(()=>{
  fetch(url("/api/"))
  .then((res)=>{
    res.json()
  })
  .then((apiData)=>{
    setData(apiData.data)
  })
  .catch((err)=>{

  })
},[])

  return (
    <div className="App">
      <header className="App-header">
      React apps are sweet {data}
      </header>
    </div>
  );
}

export default App;
