
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import New3 from './Components/New3';

function App() {
  const router=createBrowserRouter([
    
  {
    path:'/',
    element:<New3/>
  }

])
  return (
    

    <RouterProvider router={router}></RouterProvider>
       
  );
}

export default App;
