import { useState } from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ name, count, incrementCount }) => {
  //   const [count, setCount] = useState(0);

  //   const incrementCount = () => {
  //     setCount((prev) => prev + 1);
  //   };
  return (
    <div>
      <h2 onMouseOver={incrementCount}>
        {name} Hovered {count} times
      </h2>
    </div>
  );
};

export default withCounter(HoverCounter, 5);
