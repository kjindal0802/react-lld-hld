import React from "react";

export default function App(props) {
  const [input, setInput] = React.useState("");

  const debounce = React.useCallback((cbFn) => {
    console.log(cbFn);
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        cbFn(args);
      }, 2000);
    };
  }, []);

  const handleDebounceValue = React.useCallback(
    debounce((value) => {
      console.log(value);
    }, 2000),
    []
  );

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    handleDebounceValue(value);
  };

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={input} onChange={handleChange} type="text" />
    </div>
  );
}
