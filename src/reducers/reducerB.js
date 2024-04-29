import { INCREMENTB, DECREMENTB } from "./actionTypes";

const initialState = {
  countB: 2,
};

function rootReducerB(state = initialState, action) {
  switch (action.type) {
    case INCREMENTB:
      return {
        ...state,
        countB: state.countB + 1,
      };
    case DECREMENTB:
      return {
        ...state,
        countB: state.countB - 1,
      };
    default:
      return state;
  }
}

export default rootReducerB;
