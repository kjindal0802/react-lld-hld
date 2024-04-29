import { INCREMENTA, DECREMENTA } from "./actionTypes";

const initialState = {
  countA: 1,
};

function rootReducerA(state = initialState, action) {
  switch (action.type) {
    case INCREMENTA:
      return {
        ...state,
        countA: state.countA + 1,
      };
    case DECREMENTA:
      return {
        ...state,
        countA: state.countA - 1,
      };
    default:
      return state;
  }
}

export default rootReducerA;
