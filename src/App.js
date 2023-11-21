import Caro from "./Components/Caro";
import NavBar from "./Components/NavBar";
import Foot from "./Components/Foot"
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter} from 'react-router-dom'

import Card from "./Components/Card.jsx"


import Women from "./Components/Women.jsx";
import Men from "./Components/Men.jsx";
import Kids from "./Components/Kids.jsx";

import Cart from "./Components/Cart.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import { useSelector } from "react-redux";

function App() {
  const userx=useSelector(state=>state.userdata.loginInfo);
  const router=createBrowserRouter([
    {
      path:'/',

      element:userx[0]&&userx[0].data.accesstoken?<Profile/>:<Login/>
    },
    {
      path:'signup',
      element:<Login/>
    }
  ])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><NavBar/><Caro/><Card/><Foot/></>}/>
        <Route path='/Women' element={<><NavBar/><Women/><Foot/></>}/>
        <Route path='/Men' element={<><NavBar/><Men/><Foot/></>}/>
        <Route path='/Kids' element={<><NavBar/><Kids/><Foot/></>}/>
        <Route path='/Cart' element={<><NavBar/><Cart/><Foot/></>}/>
        <Route path='/Signup' element={<><NavBar/><Signup/><Foot/></>}/>
        
        
      </Routes>
      </BrowserRouter> 
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
