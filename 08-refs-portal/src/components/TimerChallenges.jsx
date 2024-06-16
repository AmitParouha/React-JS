import { useRef } from "react";
import { useState } from "react";
import ResultModel from "./ResultModel";
 
export default function TimerChallenges({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState();
 
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
 
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    setTimerIsActive(false);
  }
 
  // this function will run in every 10 millisecond of interval
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    setTimerIsActive(true);
  }
 
  function handleStop() {
    clearTimeout(timer.current);
    dialog.current.open();
    setTimerIsActive(false);
  }
 
  return (
    <>
      <ResultModel
        targetTime={targetTime}
        ref={dialog}
        timeRemaining={timeRemaining}
        handleReset={handleReset}
      />
 
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}