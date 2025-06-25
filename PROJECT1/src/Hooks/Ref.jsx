import React, { useState, useRef, useEffect } from 'react';

function Ref() {
  const [count, setCount] = useState(0); // useState for re-rendering
  const value = useRef(0); // useRef for persistent value without re-render

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleValueIncrement = () => {
    value.current = value.current + 1;
    console.log("value incremented:", value.current);
  };

  useEffect(() => {
    console.log("count changed");
  }, [count]); // Dependency array added

  return (
    <div>
      <h1>useState Count: {count}</h1>
      <button onClick={handleIncrement}>Increment useState</button>

      <h1>useRef Value: {value.current}</h1>
      <button onClick={handleValueIncrement}>Increment useRef</button>
    </div>
  );
}
export default Ref;
