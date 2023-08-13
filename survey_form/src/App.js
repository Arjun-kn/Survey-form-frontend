import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Postform from './components/Postform/Postform';
import Dashboard from './components/Dashboard/Dashboard';
import QuestionCard from './components/Question/Question';
import Theme from './components/Theme/Theme';



function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route  path="/" element={<Login/>}/>
<Route path="/register" element={<Register />} />
<Route path="/home"  element={<Dashboard/>}/>
<Route path="/postform"  element={<Postform/>} />
<Route path='/theme' element={<Theme/>}/>
<Route path='/questions' element={<QuestionCard/>}/>
</Routes>
</BrowserRouter>
</>
  
  );
}

export default App;
