import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime({ minutes: 0, seconds: 0 });
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
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;