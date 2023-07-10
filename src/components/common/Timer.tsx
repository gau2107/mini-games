interface TimerProps {
  timeInSeconds: Number;
}
const Timer: React.FC<TimerProps> = ({ timeInSeconds }) => {
  return <h1>{timeInSeconds.toString()}</h1>;
};

export default Timer;
