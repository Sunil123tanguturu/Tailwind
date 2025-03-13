import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Athentication/Login'; // Adjust the import path
import DashboardMain from './Components/Dashboard/DashboardMain';

// Other component imports, if any

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Login />} />
        <Route  path='/dashboard' element={<DashboardMain />} />
     
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  )
}


export default App;
