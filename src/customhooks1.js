import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

function useWindow() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  return size;
}

function useDebounce(value, delay = 2000) {
  const [text, setText] = useState(value);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setText(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return text;
}

function useInterval(cbFn, delay) {
  useEffect(() => {
    let interval = setInterval((...args) => {
      cbFn(args);
    }, delay);

    return () => clearTimeout(interval);
  }, [cbFn, delay]);

  return null;
}

function useThrottle(cbFn, delay) {
  let callback = useRef();

  useEffect(() => {
    callback.current = cbFn;
  }, [cbFn]);

  useEffect(() => {
    let timer;
    if (!timer) {
      callback.current();
      timer = true;
      setTimeout(() => {
        timer = false;
      }, delay);
    }
  }, [delay]);
}

export default function App() {
  const [value, setValue] = useState("");
  //   const size = useWindow();

  const text = useDebounce(value, 2000);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  useEffect(() => {
    if (text !== "") console.log("debounced value", text);
  }, [text]);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
}
