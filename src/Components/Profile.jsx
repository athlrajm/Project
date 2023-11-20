import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logOut} from '../Redux/CreateSlice'
import {updateapi} from './Api'

const Profile = () => {
    const dispatch=useDispatch()
  const upX=useSelector(state=>state.userdatas.loginInfo)
    const logoutX=()=>{
      dispatch(logOut())
    }
    const [Name,setName]=useState()
    updateapi({Name})
    console.log("upx",upX)
  return (
    <div>
        <h1>your details are:</h1>
       <table style={{width:500}}>
        <tr>
          <th>name</th>
          
          <th>LastName</th>
          <th>age</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{Name}</td>
        </tr>
        
       </table>
       
        <button onClick={logoutX}>logout</button>
        <Link to={'updated'}>update</Link>
    </div>
    
  )
}

export default Profile