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
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(1);

  function substractStep() {
    setStep((s) => s - 1);
  }
  function addStep() {
    setStep((s) => s + 1);
  }

  function substractCounter() {
    setCounter((c) => c - step);
  }
  function addCounter() {
    setCounter((c) => c + step);
  }
  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <>
      <div>
        <button onClick={substractStep}>-</button>
        Step:{step}
        <button onClick={addStep}>+</button>
      </div>
      <div>
        <button onClick={substractCounter}>-</button>
        Counter:{counter}
        <button onClick={addCounter}>+</button>
      </div>
      <div>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>{" "}
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
