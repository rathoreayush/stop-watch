import './App.css';
import React, { useState } from "react";
let adjustInterval=undefined;

function App() {

  const[timer,setTimer]=useState(0);
  const[start,setStart]=useState(false)


  const startWatch=()=>{
    adjustInterval= setInterval(()=>{
      setTimer((x)=>x+1)
    },1000)
    setStart(true)
  }

  const stopWatch=()=>{
    clearInterval(adjustInterval)
    setStart(false)
  }

  const resetWatch=()=>{
    setTimer(0)
    clearInterval(adjustInterval)
    setStart(false)


  }
  return (
    <div className="App" style={{textAlign:"center",marginTop:"3rem"}}>
     <h1>Stop-Watch</h1>
     <h1>{timer}</h1>
     <button className='start' disabled={start} onClick={startWatch} >Start</button>
     <button className='stop' onClick={stopWatch}>Stop</button>
     <button className='reset' onClick={resetWatch}>Reset</button>
     <p>Devloped by Ayush</p>
    </div>
  );
}

export default App;
