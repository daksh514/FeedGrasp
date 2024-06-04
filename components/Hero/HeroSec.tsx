import Image from "next/image";
import React from "react";
import { ArrowDown } from "lucide-react";

function HeroSec() {
  return (
    <div className="widthContainer max-md:pb-10 pb-4" id="home">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <div className="flex justify-center flex-col md:min-h-[500px]  max-md:mt-10 max-md:items-center">
          <p className="text-base opacity-60 ">Hi there, we help you</p>
          <h1 className="text-base-content text-5xl font-semibold max-[930px]:text-3xl max-md:text-center">
            Gather Insights that Drive Results
          </h1>
          <p className="text-base opacity-70 mt-4 max-md:text-center">
            Transform customer feedback into actionable insights. Empower your
            decisions with data that matters.
          </p>
          <button className="btn btn-primary w-2/4 mt-5">Get Started</button>
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <div className="bg-white relative w-4/5 aspect-square rounded-xl max-md:max-w-md">
            <Image
              src={"/images/suggestCard.png"}
              fill
              alt="ss"
              className="rounded-lg w-2/4 h-auto aspect-square"
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-20 flex items-center justify-center gap-2 max-md:hidden">
        See More <ArrowDown className="h-auto w-5" />{" "}
      </p>
    </div>
  );
}

export default HeroSec;
