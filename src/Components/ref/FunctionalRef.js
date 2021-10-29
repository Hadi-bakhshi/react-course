import { useEffect, useRef, useState } from "react";
const FunctionalRef = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [count, setCount] = useState(0);
  const previousValue = useRef();
  const previousCount = useRef();

  // Handler

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  // UseEffect

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        My name is {inputValue} and it was {previousValue.current} before
      </p>
      <div>
        <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
        <div>count is : {count}</div>
        <div>Previous count was : {previousCount.current}</div>
      </div>
    </div>
  );
};

export default FunctionalRef;
