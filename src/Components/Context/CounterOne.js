import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const {addOne,addSix,decrement}= useCountAction();
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={addOne}>Add one</button>
      <button onClick={addSix}>Add six</button>
      <button onClick={decrement}>decrease</button>
    </div>
  );
};

export default CounterOne;
