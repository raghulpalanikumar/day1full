import React,{useState} from 'react'
const State = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = ()=>{
    setCount(count+1)
  }
  const handleDecrement =()=>{
    setCount(count-1)
  }
  const reset = ()=>{
    setCount(0)
  }
 
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default State