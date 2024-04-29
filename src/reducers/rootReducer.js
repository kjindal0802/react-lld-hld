import { combineReducers } from "redux";
import rootReducerA from "./reducerA";
import rootReducerB from "./reducerB";

const rootReducer = combineReducers({
  rA: rootReducerA,
  rB: rootReducerB,
});

export default rootReducer;
