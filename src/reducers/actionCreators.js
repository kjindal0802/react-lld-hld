import { INCREMENTA } from "./actionTypes";

const incrementA = () => (dispatch, getState) => {
  const count = getState().rA.countA;
  console.log(count + ` under action creator`);
  setTimeout(() => {
    dispatch({ type: INCREMENTA });
  }, 2000);
};

export { incrementA };
