import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useDebounce(text, delay) {
  const [input, setInput] = useState(text);

  useEffect(() => {
    let timer = setTimeout(() => {
      setInput(text);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return input;
}

function useWindowResize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return size;
}

function useDebounceDispatch(action, delay) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      action(input);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, input, action]);

  return setInput;
}

export default function App() {
  const [input, setInput] = useState("");
  const size = useWindowResize();
  console.log(size);
  const debouncedText = useDebounce(input, 2000);

  useEffect(() => {
    console.log("api called with" + debouncedText);
  }, [debouncedText]);

  return (
    <>
      <input
        type="text"
        onChange={({ target: { value } }) => setInput(value)}
      />
    </>
  );
}
