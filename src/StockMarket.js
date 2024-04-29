import React, { useState, useEffect } from "react";

export default function App() {

    const data = useStockData(['IBM'])

}

function useStockData(symbols) {
  const [input, setInput] = useState(symbols);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("", input).then((res) => {
      setData(input);
    });
  }, [input]);

  return data;
}
