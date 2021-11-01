import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const setCount = useCountAction();
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
};

export default CounterOne;
