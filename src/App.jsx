import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);


  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning])
  
  const startStop = () => {
    setIsRunning((isRunning) => !isRunning);
  }

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  }
 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
  return (
    <>
      <h1>Stopwatch</h1>  

      <h2>Time: {formatTime(elapsedTime)}</h2>

      <button onClick={startStop}>{isRunning?"Stop":"Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
