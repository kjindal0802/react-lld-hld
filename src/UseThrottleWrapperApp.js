import { useState } from "react";
import useThrottle from "./useThrottleWrapper";

export default function App() {
  const [input, setInput] = useState();

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleClick = useThrottle(() => {
    console.log("APi posted");
  }, 2000);

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
