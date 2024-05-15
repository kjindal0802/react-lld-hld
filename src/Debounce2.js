import React, { useState, useCallback } from "react";

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

  const throttle = useCallback((cbFn, delay) => {
    let flag;
    return (...args) => {
      if (!flag) {
        cbFn();
        flag = true;
        setTimeout(() => {
          flag = false;
        }, delay);
      }
    };
  }, []);

  const handleApiChange = useCallback(
    debounce((value) => {
      console.log(value);
    }, 2000),
    []
  );

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    handleApiChange(value);
  };

  return <input type="text" value={input} onChange={handleChange} />;
}
