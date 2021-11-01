import React, { useContext, useState } from "react";

// 1- Creat context  2- Export context
const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    // 3-Provide
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};


// Export
export default CounterProvider;
export const useCount = () => useContext(CounterContext);
export const useCountAction = () => useContext(CounterContextDispatcher);
