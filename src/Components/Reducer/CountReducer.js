import { useReducer } from "react";

// Reducer Function and state value
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CounterComp = () => {

    // useReducer Hook
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2> Count is : {count}</h2>
      <button onClick={()=> dispatch("addOne")}>Add One</button>
      <button onClick={()=> dispatch("addFive")}>Add Five</button>
      <button onClick={()=> dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default CounterComp;
