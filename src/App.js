import React, { useState } from 'react';
import './App.css';

const App = () =>{
  const state = useState();
  let [count, setCount] = useState(0);

  const incNumber = () =>{
    setCount (count + 1);
  }

  const decNumber = ()=>{
    setCount (count - 1);
  }
  return(
    <>
    <div className='main'>
      <h1>{count}</h1>
      <button onClick={incNumber}> Increase Number </button>
      <button onClick={decNumber}> Decrease Number </button>
      </div>
    </>
  );
}

export default App;
