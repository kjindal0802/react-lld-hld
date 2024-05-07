import { useCallback, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const debounce = useCallback((cbFn, delay = 2000) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        cbFn(args);
      }, delay);
    };
  }, []);

  const throttle = useCallback((cbFn, delay = 5000) => {
    let timer;
    return (...args) => {
      if (!timer) {
        cbFn(args);
        timer = true;
        setTimeout(() => {
          console.log("Reseting timer");
          timer = false;
        }, delay);
      }
    };
  }, []);

  const handleDebounceValue = useCallback(
    debounce((value) => {
      console.log(value);
    }),
    []
  );

  const handleThrottle = useCallback(
    throttle(() => {
      console.log(input);
    }),
    [input]
  );

  const handleChange = ({ target: { value } }) => {
    console.log(value);
    setInput(value);
    handleDebounceValue(value);
  };

  const handleClick = () => {
    handleThrottle();
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
