import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Inside hook");
  }, []); //will render at mounting phase only

  //   useEffect(() => {
  //     console.log("Inside hook");
  //   }); //will render every time component is rendered

  //   useEffect(() => {
  //     console.log("conditional render");
  //   }, [count]); //will render base on parameters passed

  return (
    <>
      <h2>UseEffect Example</h2>
      <p>Counter : {count}</p>
      <button onClick={() => setCount(5)}>Increment</button>
    </>
  );
}
