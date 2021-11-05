import { useReducer } from "react";
import styles from "./CounterReducer.module.css";

// Reducer Function and state value
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterComp = () => {
  // useReducer Hook
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      {/* FirstCounter */}
      <div className={styles.counter}>
        {/* Title */}
        <h2> Count is : {count.firstCounter}</h2>
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
      </div>
      {/* End of FirstCounter */}

      {/* SecondCounter */}
      <div className={styles.counter}>
        {/* Title */}
        <h2>Second count is : {count.secondCounter}</h2>
        {/* Buttons */}
        <button
          className={styles.addbtn}
          onClick={() => dispatch({ type: "add2", value: 5 })}
        >
          Add Five
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          Decrement
        </button>
      </div>
      {/* End of SecondCounter */}
      <br />
      {/* Reset button */}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterComp;
