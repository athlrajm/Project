import Caro from "./Components/Caro";
import NavBar from "./Components/NavBar";
import Foot from "./Components/Foot"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Card from "./Components/Card.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><NavBar/><Caro/><Card/><Foot/></>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
