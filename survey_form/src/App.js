import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route  path="/" element={<Login/>}/>
<Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
</>
  
  );
}

export default App;
