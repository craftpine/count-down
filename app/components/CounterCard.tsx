'use client'
import React from "react";
import { useRef, useState, useEffect } from "react";

type Props = {
  name: string;
  def: any;
  timeValue: any;
};
export const CounterCard = ({ name, timeValue, def }: Props) => {
  //const [n, setN] = useState(timeValue);

  const [topP, setTopP] = useState<any>();
  const [topFlipP, setTopFlipP] = useState(timeValue);
  const [bottomP, setBottomP] = useState(timeValue);
  const [bottomFlipP, setBottomFlipP] = useState(timeValue);

  const topContent = useRef(null);
  const topFlip = useRef(null);
  const topFlipContent = useRef(null);
  const bottomContent = useRef(null);
  const bottomFlipContent = useRef(null);
  const bottomFlip = useRef(null);

  useEffect(() => {
    let flag = false;

    if (!flag) {
      if (!timeValue) return;

      //setN(timeValue);

      if (name == "DAYS" && timeValue != def) {
        (topFlip?.current as any).classList?.add("animate-flipDown");
        (bottomFlip?.current as any).classList.add("animate-flipUp");
      } else if (name == "HOURS" && timeValue != def) {
        (topFlip?.current as any).classList.add("animate-flipDown");
        (bottomFlip?.current as any).classList.add("animate-flipUp");
      } else if (name == "MINUTES" && timeValue != def) {
        (topFlip?.current as any).classList?.add("animate-flipDown");
        (bottomFlip?.current as any).classList?.add("animate-flipUp");
      }

      if (name != "SECONDS") {
        setTopFlipP(timeValue);
        setBottomP(timeValue);
        setBottomFlipP(timeValue);
      } else {
        setTopFlipP(timeValue);
        setBottomP(timeValue);
        setBottomFlipP(timeValue);
        (topFlip?.current as any).classList.add("animate-flipDown");
        (bottomFlip.current as any).classList.add("animate-flipUp");
      }

      // topFlip.current.classList.add("animate-flipDown");
      // bottomFlip.current.classList.add("animate-flipUp");
    }

    return () => {
      flag = true;
    };
  }, [timeValue]);

  function TopFlipStartAnimation() {
    setTopFlipP(timeValue);
    setTopP(timeValue - 1);
  }

  function TopFlipAnimationEnd() {
    setTopFlipP(timeValue - 1);

    (topFlip.current as any).classList.remove("animate-flipDown");
  }

  function BottomFlipAnimationStart() {
    setBottomFlipP(timeValue - 1);
    setBottomP(timeValue - 1);
  }

  function BottomFlipAnimationEnd() {
    // setBottomFlipP(n -1);
    setBottomP(timeValue - 1);

    (bottomFlip.current as any).classList.remove("animate-flipUp");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <div className=" relative overflow-hidden size-16 md:w-40 md:h-32 shadow-[0px_10px_5px_0px_rgba(0,0,0,0.5)]">
        <div className=" w-2.5 h-2.5 absolute bg-black rounded-full z-20 top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>

        <div className=" w-2.5 h-2.5 absolute bg-black rounded-full z-20 top-[50%] right-0 translate-x-[50%] translate-y-[-50%]"></div>

        <div
          className=" bg-[#2c2c44] w-full h-1/2 overflow-hidden text-[40px] md:text-[70px] font-extrabold absolute top-[-1px] left-0 rounded-t-md "
          id="top"
        >
          <p
            className=" absolute bottom-[-94%] md:bottom-[-85%] left-[50%] translate-x-[-50%] text-[#d44e71]"
            ref={topContent}
          >
            {topP}
          </p>
        </div>

        <div
          className=" bg-[#2c2c44] w-full h-1/2 overflow-hidden text-[40px] md:text-[70px] font-extrabold absolute top-[-1px] left-0 origin-bottom rounded-t-md "
          id="flip-top"
          ref={topFlip}
          onAnimationStart={TopFlipStartAnimation}
          onAnimationEnd={TopFlipAnimationEnd}
        >
          <p
            className=" absolute bottom-[-94%] md:bottom-[-85%] left-[50%] translate-x-[-50%] text-[#d44e71]"
            ref={topFlipContent}
          >
            {topFlipP}
          </p>
        </div>

        <div
          className=" bg-[#34364f] w-full h-1/2 overflow-hidden text-[40px] md:text-[70px] font-extrabold absolute bottom-0 left-0 rounded-b-md"
          id="bottom"
        >
          <p
            className=" absolute top-[-95%] md:top-[-80%] left-[50%] translate-x-[-50%] text-[#f85d85]"
            ref={bottomContent}
          >
            {bottomP}
          </p>
        </div>

        <div
          className=" bg-[#34364f] w-full h-1/2 overflow-hidden text-[40px] md:text-[70px] font-extrabold absolute bottom-0 left-0 origin-top rounded-b-md"
          id="flip-bottom"
          ref={bottomFlip}
          onAnimationStart={BottomFlipAnimationStart}
          onAnimationEnd={BottomFlipAnimationEnd}
        >
          <p
            className=" absolute top-[-95%] md:top-[-80%] left-[50%] translate-x-[-50%] text-[#f85d85]"
            ref={bottomFlipContent}
          >
            {bottomFlipP}
          </p>
        </div>
      </div>

      <p className=" text-[#8486a9] tracking-[2px] md:tracking-[5px] text-[10px] md:text-[16px] font-bold">
        {name}
      </p>
    </div>
  );
};
