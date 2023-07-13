import { useReducer, useState } from "react";

import "./styles.css";
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="App">
      <h1>tanaypratap's box || {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
