import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { Api2 } from './Api';
import { Link } from 'react-router-dom';
const Login = () => {
    const [Email, setEmail]=useState();
    const [Password, setPassword]=useState();
    const dispatch=useDispatch()
    const sub=()=>{
     Api2(dispatch,{Email,Password})
     console.log("loginfirst" ,Email,Password);
    }
  return (
    <div>
         <div class="container flex">
      <div class="facebook-page flex">
        <div class="text">
          
        </div>
            <input type="email"value={Email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="text" value={Password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <div className='log'>
            <button onClick={sub} >login</button>
            </div>

        
        <div class="new">
        <Link to={'signup'}>
        <button>create new account</button>
        </Link>
          </div>
        
      </div>
    </div>
    </div>
  )
}

export default Login