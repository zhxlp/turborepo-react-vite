import styles from "./MyCounter.module.scss";
import { useState } from "react";
import { MyButton } from "../MyButton";

interface MyCounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export const MyCounter: React.FC<MyCounterProps> = ({
  initialValue = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <section className={styles.container}>
      <p className={styles.text}>Count: {count}</p>
      <MyButton label="Increment" onClick={increment} disabled={count >= max} />
      <MyButton label="Decrement" onClick={decrement} disabled={count <= min} />
      <MyButton label="Reset" onClick={reset} primary={true} />
    </section>
  );
};
