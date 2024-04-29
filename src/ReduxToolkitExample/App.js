import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, getUsers, incrementPrepare } from "./rootSlice";

export default function App() {
  const counter = useSelector((state) => state.counter.value);
  const users = useSelector((state) => state.counter.users);
  users.length > 0 && console.log(users);
  console.log(counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <p> Counter : {counter}</p>
      <button onClick={() => dispatch(incrementPrepare(0))}>
        Increment Counter
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement Counter</button>
    </div>
  );
}
