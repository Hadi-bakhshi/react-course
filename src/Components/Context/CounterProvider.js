import React, { useContext, useReducer } from "react";

// 1- Creat context  2- Export context
const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

// reducer function and state
const initialState = 0;
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



const CounterProvider = ({ children }) => {


  const [count, dispatch] = useReducer(reducer, initialState);


  return (
    // 3-Provide
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

// Export
export default CounterProvider;
export const useCount = () => useContext(CounterContext);


// Actions

export const useCountAction = () => {
  return useContext(CounterContextDispatcher);
  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const addSix = () => {
  //   setCount((prevCount) => prevCount + 6);
  // };
  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 10);
  // };
  // return { addOne, addSix, decrement };
};
