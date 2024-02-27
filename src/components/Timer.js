import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);

      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          let newSeconds = prevTime.seconds + 1;
          let newMinutes = prevTime.minutes;

          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes += 1;
          }

          return { minutes: newMinutes, seconds: newSeconds };
        });
      }, 10);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime({ minutes: 0, seconds: 0 });
    setIsRunning(false);
  };

  const cleanup = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return cleanup;
  }, []);

  const formattedMinutes = String(time.minutes).padStart(2, "0");
  const formattedSeconds = String(time.seconds).padStart(2, "0");

  return (
    <div>
      <h2>Timer</h2>
      <p>
        {formattedMinutes}:{formattedSeconds}
      </p>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
