import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import thunkMiddleware from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import store from "./reduxtoolkit/store";
// import store from "./ReduxToolkitExample/store";
// import store from "./UserReduxToolkit/store";
import store from "./AGGrid/store";

// import JSX from "./JSX";
// import App1 from "./App1";
// import PC from "./PureComponent";
// import App from "./HOC/App";
// import Reducer from "./Reducer";
// import Bootstrap from "./Bootstrap";
// import Aggrid from "./Aggrid";
// import Hooks from "./Hooks";
// import UseMemo from "./UseMemo";
// import UseEffect from "./UseEffect";
// import Window from "./Window";
// import ReactMemo from "./ReactMemo";
// import UseMemoVsCallback from "./UseMemoVsCallback";
// import MaterialUI from "./MaterialUI";
// import Podcast from "./Podcast";
// import App from "./ReactHookForm/App";
// import App from "./ReduxToolkitExample/App";
// import App from "./User/App";
// import App from "./AGGrid/App";
// import App from "./ReactSelect";
// import App from "./DebounceAndTrottle";
// import App from "./customhooks";
// import App from "./FunctionalHOC/App";
// import App from "./Dropdown";
// import App from "./SetTimeoutCustomhook";
// import App from "./LazyLoading"
// import App from "./RenderProps";
// import App from "./InfiniteScroll";
// import App from "./IntersectionObserver";
// import App from "./NestedComment";
// import App from "./Carousel";
// import App from "./Whiteboard";
// import App from "./InfiniteScroll1";
// import App from "./Calendar";
// import App from "./Debounce1";
// import App from "./customhooks1";
// import App from "./UseThrottleWrapperApp";
// import App from "./withDataHook";
// import App from "./MouseTrackerRenderProps";
// import App from "./BookMyShow";
import App from "./FunctionalErrorBoundary";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware))
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
