import { useState, useRef } from "react";

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
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

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
    </div>
  );
};

export default Timer;