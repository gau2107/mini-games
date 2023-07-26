import Timer from "@/components/common/Timer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type QueryParams = {
  slug: string;
};

const Slug: NextPage = () => {
  const router = useRouter();
  const [clicks, setClicks] = useState<number>(0);
  const [timeInSeconds, setTimeInSeconds] = useState<number | null>(null);

  useEffect(() => {
    // TODO find out why slug is undefined and router.query is empty object
    const { slug } = router.query as QueryParams;
    if (slug) {
      let val = parseInt(slug[0]) * 60;
      setTimeInSeconds(val);
    }
  }, []);

  const timerEndCallbackFn = () => {};

  return (
    <div
      className="h-screen	 w-screen bg-slate-200 select-none"
      onMouseDown={() => setClicks(clicks + 1)}
    >
      <Timer
        timeInSeconds={timeInSeconds}
        timerEndCallbackFn={timerEndCallbackFn}
      />
      <h1>You clicked {clicks} times</h1>
    </div>
  );
};

export default Slug;
