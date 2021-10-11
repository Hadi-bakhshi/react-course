import { useEffect, useState } from "react";
const FunctionalTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hi Hadi");
      setCount(count + 1);
    }, 1000);

    return () => {
        console.log("Clean up");
      clearInterval(interval);
    };
  },);

  return <div>This is an interval (FC)</div>;
};

export default FunctionalTimer;
