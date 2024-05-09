import { useEffect, useState } from "react";

function useData(data) {

  const [input, setInput] = useState(data);

  useEffect(() => {
    setInput({ ...input, ...data });
  }, []);

  const handleChange = (data) => {
    setInput({ ...input, ...data });
  };

  return [input, handleChange];
}

export default function Parent() {
  const [data, setData] = useData({
    a: 1,
    b: 2,
  });

  console.log(data);

  const handleClick = () => {
    setData({ c: 3 });
  };
  return (
    <>
      <p>{data.a}</p>
      <button onClick={handleClick}></button>
      <Child />
    </>
  );
}

function Child() {
  const [data, setData] = useData();

  console.log(data);

  return null;
}
