"use client";

import { useEffect, useState } from "react";
import { CounterCard } from "./components/CounterCard";
import { Footer } from "./components/Footer";

function getTimeLeft(targetDate: string) {
  const end = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const distance = end - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const targetDate = "2026-06-22";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(targetDate));
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    //     <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //       {/* <span className="countdown font-mono text-5xl"> */}
    //         <span className="countdown font-mono text-5xl">{timeLeft.days}</span>
    //         {/* <div>{timeLeft.days}</div> */}
    //       {/* </span> */}
    //       days
    //     </div>
    //     <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.hours }}></span>
    //       </span>
    //       hours
    //     </div>
    //     <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.minutes }}></span>
    //       </span>
    //       min
    //     </div>
    //     <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.seconds }}></span>
    //       </span>
    //       sec
    //     </div>
    //   </div>
    // </main>

    <div className=" min-h-screen w-full bg-[#1e1f29] font-RedHat ">
      <div className="bg-star-pattern min-h-screen w-full flex flex-col justify-normal items-center relative pt-[50px] md:pt-[50px]">
        <div className="w-full flex flex-col justify-center items-center gap-24">
          <h1 className=" text-white uppercase font-bold text-xl tracking-[4px]  text-center">
           I&apos;ll be waiting for you, <span className="text-[#5A639C]">bánh cuốn 😌😌😌</span> 
          </h1>
          <div className="w-full flex flex-row justify-around md:justify-evenly items-center ">
            <CounterCard name={"DAYS"} timeValue={timeLeft.days} def={8} />
            <CounterCard name={"HOURS"} timeValue={timeLeft.hours} def={23} />
            <CounterCard
              name={"MINUTES"}
              timeValue={timeLeft.minutes}
              def={59}
            />
            <CounterCard
              name={"SECONDS"}
              timeValue={timeLeft.seconds}
              def={59}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
