import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const increment = (value) => {
        setCount(count + value);
    };
    const decrement = (value) => {
        setCount(count - value);
    };
    const reset = () => {
      setCount(0);
  };
    return (
        <div className="counter-container">
            <h1>Increment/Decrement Counter: {count}</h1>
            <div className="button-container">
                <button onClick={() => increment(1)}>+1</button>
                <button onClick={() => increment(5)}>+5</button>
                <button onClick={() => increment(10)}>+10</button>
                <button onClick={() => increment(15)}>+15</button>
                <button onClick={() => increment(20)}>+20</button>
                <button onClick={() => decrement(1)}>-1</button>
                <button onClick={() => decrement(5)}>-5</button>
                <button onClick={() => decrement(10)}>-10</button>
                <button onClick={() => decrement(15)}>-15</button>
                <button onClick={() => decrement(20)}>-20</button>
            </div>
            <div className="button-container">
            <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default App;
