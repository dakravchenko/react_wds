import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(() => {
    return 0
  })
  const [theme, setTheme] = useState(() => {
    return 'blue'
  })
  function decrementCount(){
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
