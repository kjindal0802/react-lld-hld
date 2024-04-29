import React, { useEffect, useState } from "react";

function useSetTimeout(cbFn, delay) {
  useEffect(() => {
    let timer = setTimeout((...args) => {
      cbFn(args);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return ;
}

export default function App() {
  const [data, setData] = useState("bc");

  const handleChange = useSetTimeout(() => {
    setData("bvacs");
  }, 2000);

  return <input type="text" onChange={handleChange} />;
}
