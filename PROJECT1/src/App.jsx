import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Navbar from './components/navbar';
import Counter from './components/Counter';
import Hooks from './components/Hooks';
import Login from './components/Login';
import State from './components/State';
import Effect from './components/Effect';
import Effect2 from './components/Effect2';
import { Routes, Route } from 'react-router-dom';





const App = () => {

   return (
    <div>
     
  <Navbar/>
    <Routes>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/home' element={<Home userName="Raghul" />} />
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/hooks' element={<Hooks/>}> </Route>
      <Route path='/state' element={<State/>}></Route>
      <Route path='/effect' element={<Effect/>}></Route>
      <Route path='/effect2'element={<Effect2/>}></Route>s
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/ref'element={<Ref/>}></Route>
      <Route path='/reducer'element={<Reducer/>}></Route>
    
    </Routes>
  </div>
   )
}
export default App;