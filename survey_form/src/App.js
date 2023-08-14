import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Postform from './components/Postform/Postform';
import Dashboard from './components/Dashboard/Dashboard';
import QuestionCard from './components/Question/QuestionCard';
import Theme from './components/Theme/Theme';
import Preview from './components/Preview/Preview';
import Protectedroute from './components/Protect/Protectedroute';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route  path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>} />
<Route path="/home"  element={<Protectedroute Component={Dashboard}/>}/>
<Route path="/postform"  element={<Protectedroute Component={Postform}/>} />
<Route path="/question"  element={<Protectedroute Component={QuestionCard}/>}/>
<Route path='/preview' element={<Protectedroute Component={Preview}/>} />
</Routes>
</BrowserRouter>
</>
  
  );
}

export default App;
