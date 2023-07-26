import { useEffect, useState } from "react";

interface TimerProps {
  timeInSeconds: number | null;
  timerEndCallbackFn: Function;
}
const Timer: React.FC<TimerProps> = ({ timeInSeconds, timerEndCallbackFn }) => {
  const [timer, setTimer] = useState<number | null>(timeInSeconds);
  useEffect(() => {
    setTimer(timeInSeconds);
  }, [timeInSeconds]);
  useEffect(() => {
    timerLogic();
  }, [timer]);

  const timerLogic = () => {
    if (typeof timer === "number") {
      const timeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      if (timer === 0) {
        clearTimeout(timeout);
        timerEndCallbackFn();
      }
    }
  };
  return <h1>{timer?.toString()}</h1>;
};

export default Timer;
