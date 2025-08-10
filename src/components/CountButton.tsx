import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() =>
        setCount((prev) => {
          return prev + 1;
        })
      }
    >
      {count}
    </button>
  );
}

export default CountButton;
