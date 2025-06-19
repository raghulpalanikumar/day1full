import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';


const App = () => {
  //arrray declar panra apa return ku mela tha irukumanum
  var fruits = ["Apple","Banana","Mango","Grapes"];

  var users = [
    {name:"Raghul",p:"9489325268"},
    {name:"Rupesh",phnNum:"9942609931"}
  ]
  //array dekpanra apa 
  return (
    <div>
    <Home items = {fruits} users = {users}/>
    <About/>
    <Contact/>
    <Counter/>
    </div>
  )
}
export default App;