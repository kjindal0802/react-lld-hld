import { useState, useMemo } from "react";
import UseMemoChild from "./UseMemoChild";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);

  const MemoChild = useMemo(() => {
    return <UseMemoChild></UseMemoChild>;
  }, []);

  return (
    <>
      <h1>UseMemo Example</h1>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment Counter
      </button>
      <h1>Child Component (Unmemoized): </h1>
      <UseMemoChild></UseMemoChild>
      <h1>Memoized Child Component</h1>
      {MemoChild}
    </>
  );
}
