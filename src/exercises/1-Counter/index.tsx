/**
 * 1. Counter
 *
 * My counter component is not working.
 * Every second, I want to increment by one the count variable.
 */

import { useEffect, useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000);

    return () => clearInterval(timer);

  }, [])

  return (
    <div>
      <h1>My Counter 1</h1>
      <pre>{count}</pre>
    </div>
  );
};

export default Counter;
