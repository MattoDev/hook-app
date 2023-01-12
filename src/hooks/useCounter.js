import { useState } from "react";

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState((initialValue = 10));

  return { counter };
};
