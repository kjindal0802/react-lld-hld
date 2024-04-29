import React from "react";

export default function App() {
  const debounce = (cbFn, delay = 2000) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        cbFn(args);
      }, delay);
    };
  };

  const throttle = (cbFn, delay = 2000) => {
    let timer;
    return (...args) => {
      if (!timer) {
        cbFn(args);
        timer = true;
        setTimeout(() => {
          console.log("timer reset");
          timer = false;
        }, delay);
      }
    };
  };

  const handleApiCall = debounce((value) => {
    console.log(value);
  }, 2000);

  const handleThrottle = throttle((value) => {
    console.log(value);
  }, 5000);

  const handleChange = ({ target: { value } }) => {
    handleApiCall(value);
  };

  const handleClick = () => {
    handleThrottle("Def");
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}> API </button>
    </>
  );
}
