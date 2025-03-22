import { useState } from "react";
import withCounter from "./withCounter";

const ClickCount = ({ name, count, incrementCount }) => {
  //   const [count, setCount] = useState(0);

  //   const incrementCount = () => {
  //     setCount((prev) => prev + 1);
  //   };
  return (
    <div>
      <button onClick={incrementCount}>
        {name} clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCount, 10);
