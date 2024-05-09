import { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    window.addEventListener("error", handleError);

    return () => window.removeEventListener("error", handleError);
  }, []);

  const handleError = (event) => {
    console.log(event);
    setError(true);
  };

  return error ? <p>Something went wrong</p> : { ...children };
}

function Child() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
    if (counter > 3) {
      throw new Error("something went wrong");
    }
  };

  return <p onClick={handleClick}>{counter}</p>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
}
