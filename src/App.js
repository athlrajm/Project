import Caro from "./Components/Caro";
import NavBar from "./Components/NavBar";
import Foot from "./Components/Foot"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Card from "./Components/Card.jsx"


import Women from "./Components/Women.jsx";
import Men from "./Components/Men.jsx";
import Kids from "./Components/Kids.jsx";

import Cart from "./Components/Cart.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><NavBar/><Caro/><Card/><Foot/></>}/>
        <Route path='/Women' element={<><NavBar/><Women/><Foot/></>}/>
        <Route path='/Men' element={<><NavBar/><Men/><Foot/></>}/>
        <Route path='/Kids' element={<><NavBar/><Kids/><Foot/></>}/>
        <Route path='/Cart' element={<><NavBar/><Cart/><Foot/></>}/>
      </Routes>
      </BrowserRouter> 
      
      
    </div>
  );
}

export default App;
