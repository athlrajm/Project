import React from 'react'
import { ChildM } from './UsecallbackChild';
import { useCallback } from 'react';
import { useState } from 'react';




function Usecallback() {
    const [state,setState]=useState(0);
    console.log("parent rentered");
    function display()
    {
        setState(state+1);
    }
    const handleClick=()=>{}
    const MemorizedClick=useCallback(handleClick,[])
  return (
    <div>
        <h1>{state}</h1>
        <h1>hi</h1>
        <button onClick={display}>click</button>
        <ChildM value={MemorizedClick}/>
    </div>
  )
}

export default Usecallback