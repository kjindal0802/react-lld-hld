import React, { useState, useEffect } from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Example = (props) => {
  useEffect(() => {
    console.log("render");
    return () => console.log("unmount");
  }, [props.count]);

  return <div />;
};

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={updateCount}>Increment</button>
      <Example count={count} />
    </div>
  );
}

export default App;
