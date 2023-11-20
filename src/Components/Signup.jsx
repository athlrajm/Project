import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Api1 } from './Api';
function Signup() {
  const [name, setName]=useState("");
   const [Lname,setLname]=useState("");
   const [age, setAge]=useState();
   const [Email, setEmail]=useState("");
   const [Password, setPassword]=useState("");
    const submit=(e)=>{
        e.preventDefault()
        Api1({name,Lname,age,Email,Password})
        console.log("name=",name);
        console.log("lname=",Lname);
        console.log("age=",age);
        console.log("password=",Password)
    }
  return (
    <div>
      <form onSubmit={submit}>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' />
            <input value={Lname} onChange={(e)=>setLname(e.target.value)}type='text'placeholder='Last name'/>
            <input value={age} onChange={(e)=>setAge(e.target.value)}type="number" placeholder='Age'/>
            <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
            <input value={Password} onChange={(e)=>setPassword(e.target.value)}type='text'placeholder='Password'/>
            <input type="submit" />
        </form>
        <Link to={'/'}>
          <button>I have a account</button>
        </Link>
    </div>
  )
}

export default Signup