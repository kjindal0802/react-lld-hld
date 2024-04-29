import { useLocation } from "react-router-dom";

export default function Hooks() {
  let history = useLocation();

  const handleClick = () => {
    console.log(history);
  };

  return <button onClick={handleClick}>Go Home</button>;
}
