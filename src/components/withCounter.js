import { useState } from "react";

const withCounter = (OriginalCounter, inc) => {
  function withCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prev) => prev + inc);
    };
    return <OriginalCounter count={count} incrementCount={incrementCount} />;
  }
  return withCounter;
};

export default withCounter;
