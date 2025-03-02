import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>簡単なカウンター</h1>
        <div className="counter">
          <h2>{count}</h2>
          <div>
            <button onClick={decrementCount}>-1</button>
            <button onClick={incrementCount}>+1</button>
          </div>
        </div>

        <p>これは React の状態管理の基本例です</p>
      </header>
    </div>
  );
}

export default App;
