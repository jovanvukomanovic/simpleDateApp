import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  console.log(step);
  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>

        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `Day's from now`
            : "Day's ago"}
        </span>
        <span>{` ${count} ${date.toDateString()}`}</span>
      </p>
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset}>RESET</button>
        </div>
      ) : null}
    </div>
  );
}
