
import React from "react";
import { useState } from "react";
import { MemororizedChild } from "./Childchild";
import { useDispatch } from "react-redux";
import { dataInfo } from "../Redux/Datas";

function Child() {
    const [state,setState]=useState(0);
    const [state1,setState1]=useState(0);
    const dispatch=useDispatch();
    console.log("parent rentered");

    
    
    const Show=()=>{
        setState(state+1);
    }
    const Show1=()=>{
        setState1(state1+1);
    }

  return (
    
            <div>
                <h1>{state}</h1>
                <h1>{state1}</h1>
                <button onClick={Show}>click</button>
                <button onClick={Show1}>click 1</button>
                 <MemororizedChild value={state}/>
                 
            </div>
        )
    }
    
  


export default Child