import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

const store = createStore(reducer);
console.log("done", store.getState());

const App = () => (
  <div>
    <Counter />
  </div>
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
