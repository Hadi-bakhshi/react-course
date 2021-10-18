import { useState } from "react";
const WithCounter = (WrappedComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incrementValue);
    };
    return(
        <WrappedComponent 
        incrementCount={incrementCount}
        count={count}
        {...props}
        />
    )
  };
  return UpdatedComponent;
};

export default WithCounter;
