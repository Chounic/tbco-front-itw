/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

import { FC, useState } from "react";

const IncremenButton: FC<{ increment: () => void }> = ({ increment }) => {

  const setSavedCount = () => increment() ;

  return (
    <button
      onClick={setSavedCount}
    >
      Increment
    </button>
  );
};

const Counter = () => {

  const [count , setCount] = useState<number>(0);
  const addOne = () => {
    setCount( prevCount => prevCount + 1)
  }

  return (
    <div>
      <h1>My Counter 2</h1>
      <div>{count}</div>
      <IncremenButton increment={addOne} />
    </div>
  );
};

export default Counter;
