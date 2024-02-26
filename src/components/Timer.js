import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + (newSeconds >= 60 ? 1 : 0);
        return { minutes: newMinutes % 60, seconds: newSeconds % 60 };
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const formattedMinutes = String(time.minutes).padStart(2, "0");
  const formattedSeconds = String(time.seconds).padStart(2, "0");

  return (
    <div>
      <h2>Timer</h2>
      <p>
        {formattedMinutes}:{formattedSeconds}
      </p>
    </div>
  );
};

export default Timer;
