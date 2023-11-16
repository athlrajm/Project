import React from 'react'
import { useDispatch } from 'react-redux'
import Datas from '../Redux/Datas'
function New3() {
    const dispatch=useDispatch()
    const display=(e)=>{
        e.preventDefault();
       Datas(dispatch);
    }
    

  return (
    <div>
        <button onClick={display()}>Click here</button>
        <h1>hi</h1>
    </div>
  )
}

export default New3