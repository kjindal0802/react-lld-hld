import React, { useState, useEffect } from "react";

export default function Component() {
  // State to hold the data
  const [data, setData] = useState(null);

  let count = 0;
  for (let i = 0; i < 100000; i++) {
    console.log(count);
  }

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
