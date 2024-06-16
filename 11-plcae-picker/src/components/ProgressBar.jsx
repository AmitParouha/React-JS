import { useEffect } from "react";
import { useState } from "react";
 
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
 
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("inside set interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 100);
 
    return () => {
      console.log("Inside clear Interval...");
      clearInterval(interval);
    };
  }, []);
 
  return <progress value={remainingTime} max={timer} />;
}