import { useReducer } from "react";
import styles from "./CounterReducer.module.css";

// State value
const initialState = 0;
// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwoComp = () => {
    // Multiple useReducer
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      {/* FirstCounter */}
      <div className={styles.counter}>
        {/* Title */}
        <h2> Count one is : {count}</h2>
        {/* Buttons */}
        <button
          className={styles.addbtn}
          onClick={() => dispatch({ type: "add", value: 1 })}
        >
          Add One
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
      </div>
      {/* End of FirstCounter */}

      {/* SecondCounter */}
      <div className={styles.counter}>
          {/* Title */}
        <h2> Count two is {countTwo}</h2>
        {/* Buttons */}
        <button
          className={styles.addbtn}
          onClick={() => dispatchTwo({ type: "add", value: 5 })}
        >
          Add Five
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}> Reset</button>
      </div>
      {/* End of the second counter */}
    </div>
  );
};

export default CounterTwoComp;
