import React from "react";
import WhyCard from "./WhyCard";
import { ArrowDown } from "lucide-react";
import WhyUsSteps from "./WhyUsSteps";

function WhyUs() {
  return (
<div className="pt-16 max-md:pt-16" id="whyUs">
      <div className="widthContainer">
        <div>
          <WhyCard />
          <p className="text-center text-xs mt-5 font-semibold opacity-40 flex justify-center gap-2 items-center">We&apos;ll do all that for you<ArrowDown className="h-auto w-4" /></p>
         
        </div>
      </div>

      <WhyUsSteps/>
    </div>
  );
}

export default WhyUs;
