import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const stepsContent = [
  {
    title: "Create an account",
    description: "Create an account on FeedGrasp with one simple click",
  },
  {
    title: "Make a board",
    description: "Make a board in just few simple clicks and customise it",
  },
  {
    title: "Start sharing",
    description: "Get a share link and start sharing to collect feedbacks!",
  },
];

function WhyUsSteps() {
  return (
    <div className="mt-10 bg-base-300 md:min-h-[65vh] py-10 relative max-md:widthContainer md:max-h-[600px] flex flex-col ">
      <div className="flex items-center flex-col md:w-2/4 mx-auto ">
        <h1 className="text-3xl font-extrabold w-full  mx-auto text-center max-md:text-2xl">
          Start collecting feedbacks in 3 easy steps
        </h1>
        <p className="text-base opacity-70 mt-4 text-center w-full max-md:text-sm max-sm:hidden">
          Transform customer feedback into actionable insights. Empower your
          decisions with data that matters.
        </p>
      </div>
      <div className="widthContainer flex gap-3 mt-12 max-md:flex-col">
        {stepsContent.map((content, index) => (
          <div className="card max-w-96 bg-base-100 shadow-xl py-5 max-md:mx-auto" key={index}>
            <div className="badge badge-ghost px-4 rounded-md  absolute -top-1 -left-2">
              Step {index + 1}
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{content.title}</h2>
              <p>{content.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs mt-5 font-semibold opacity-40 flex justify-center gap-2 items-center">
        Yes, It&apos;s that simple!
      </p>
    </div>
  );
}

export default WhyUsSteps;
