import React from 'react';
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from './componenets/Contact';
import Navbar from './componenets/navbar';
import { Routes,Route } from 'react-router-dom';
import './index.css';
import Counter from './componenets/Counter';
import Hooks from './componenets/Hooks';
import State from './assets/Hooks/State';
import Effect from './assets/Hooks/Effect';
import Effect2 from './assets/Hooks/Effect2';
import Login from './componenets/Login';


const App = () => {

   return (
    <div>
     
  <Navbar/>
    <Routes>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/hooks' element={<Hooks/>}> </Route>
      <Route path='/state' element={<State/>}></Route>
      <Route path='/effect' element={<Effect/>}></Route>
      <Route path='/effect2'element={<Effect2/>}></Route>
      <Route path='/login'element={<Login/>}></Route>


    </Routes>
  </div>
   )
}
export default App;