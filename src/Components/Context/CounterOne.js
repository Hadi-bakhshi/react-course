import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountAction();
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => dispatch({ type: "add", value: 10 })}>
        Add Ten
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement", value: 10 })}>
        decrease
      </button>
    </div>
  );
};

export default CounterOne;
