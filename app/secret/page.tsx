"use client";
import React, { useState } from "react";
import { Footer } from "../components/Footer";

export default function Page() {
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const data = [
    {
      time: "25/06/2024",
      heading: "The very frist message",
      content: `This is the day I started coding this website, feeling both excited and nervous. Excited because it will record the journey up until D-Day. Nervous because I’m not sure if we’ll still be hanging out by then; you might end up not liking this buddy anymore. Lately, you’ve been the one initiating things, and it’s making me like you a little too much, just so you know. When you read this later, remember how you used to ignore me :)))`,
      active: true,
    },
    {
      time: 1998,
      heading: "iMac",
      content: `iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms`,
      active: false,
    },
    {
      time: 2001,
      heading: "iPod",
      content: `The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple`,
      active: false,
    },
    {
      time: 2007,
      heading: "iPhone",
      content: `iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share`,
      active: false,
    },
  ];

  const renderForm = () => {
    return (
      <div className="w-full max-w-sm space-y-4">
        <h1 className="heading-1 text-center">
          To ensure that you are{" "}
          <span className="text-[#5A639C]">bánh cuốn 😌😌😌</span>
        </h1>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            placeholder="Our anniversary :))"
            className="grow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                console.log("first");

                if (password == "150724") {
                  setIsError(false);
                  setValid(true);
                } else {
                  setIsError(true);
                  setValid(false);
                }
              }
            }}
          />
        </label>
        {isError ? <div className="text-red-400">You forgot this 🙃🙃🙃</div> : null}
      </div>
    );
  };

  const renderConent = () => {
    return (
      <ul className="px-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((t, i) =>
          t.active ? (
            <li key={i}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`!mb-10 ${
                  i % 2 == 0 ? "timeline-start  md:text-end" : "timeline-end"
                }`}
              >
                <time className="font-mono italic">{t.time}</time>
                <div className="text-lg font-black">{t.heading}</div>
                {t.content}
              </div>
              <hr />
            </li>
          ) : null
        )}
      </ul>
    );
  };

  return (
    <div className=" min-h-screen w-full bg-[#1e1f29] font-RedHat ">
      <div className="bg-star-pattern min-h-screen w-full flex flex-col justify-normal items-center relative pt-[50px] md:pt-[50px]">
        <div className="w-full flex-1 flex flex-col items-center gap-24">
          <h1 className=" text-white uppercase font-bold text-xl tracking-[4px]  text-center">
            Here are a few things I want to tell you{" "}
            <span className="text-[#5A639C]">bánh cuốn 😌😌😌</span>
          </h1>
          <div className="w-full flex flex-row justify-around md:justify-evenly items-center ">
            {valid ? renderConent() : renderForm()}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
