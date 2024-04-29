import React, { useState, memo } from "react";

const Counter = memo(function ({ count, value }) {
  console.log(`${value} refreshed`);
  return (
    <p>
      {value} : {count}
    </p>
  );
});

export default function ReactMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>I am React Memo</h1>
      <Counter value={"Counter 1"} count={count1} />
      <button onClick={() => setCount1(count1 + 1)}>Increment Counter 1</button>
      <Counter value={"Counter 2"} count={count2} />
      <button onClick={() => setCount2(count2 + 1)}>Increment Counter 2</button>
    </div>
  );
}
