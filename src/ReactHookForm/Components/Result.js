import { useSelector } from "react-redux";

export default function Result() {
  const pizza = useSelector((state) => state);
  console.log(pizza);

  return (
    <>
      <h1>{JSON.stringify(pizza, null, 2)}</h1>
    </>
  );
}
