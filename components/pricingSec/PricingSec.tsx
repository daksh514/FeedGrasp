import { Check } from "lucide-react";
import React from "react";

function PricingSec() {
  const featuresList = [
    {
      title: "Unlimited Boards",
      plans: "both",
    },
    {
      title: "Export Feedback",
      plans: "both",
    },
    {
      title: "Upvote/Downvote System",
      plans: "both",
    },
    {
      title: "Limit Feedbacks",
      plans: "both",
    },
    {
      title: "Customizable Themes",
      plans: "paid",
    },
    {
      title: "Public/Private Boards",
      plans: "paid",
    },
    {
      title: "Authenticated User Feedback Only",
      plans: "paid",
    },
  ];
  return (
    <div className=" py-16" id="pricing">
      <div className="widthContainer">
        <div>
          <h1 className="text-4xl font-extrabold w-full max-w-[40rem] mx-auto text-center max-md:text-2xl">
            Save Hours on Feedback Collection, Act Fast, Grow Smart!
          </h1>
        </div>
        <div className="flex justify-center gap-10 my-16 max-md:flex-col max-md:items-center">
          <div className="card w-full max-w-96 bg-base-100 shadow-xl">
            <div className="card-body ">
              <div className="badge badge-ghost">Starter</div>
              <h2 className="card-title text-3xl mt-2">
                {" "}
                <span className="text-2xl line-through">$29</span> $19
              </h2>
              <p>Great for small organisations!</p>
              <ul className="mt-3 font-semibold">
                {featuresList.map((feature, index) => (
                  <li key={index} className="flex gap-3 mb-4">
                    <Check className={`${feature.plans != "paid" ? 'text-green-400' : ''} `} /> {feature.title}
                  </li>
                ))}
                {/* <li className="flex gap-3"><Check className="text-green-400"/> Unlimited Boards</li> */}
              </ul>
              <div className="card-actions w-full">
                <button className="btn btn-primary w-full">Buy Now</button>
              </div>
              <p className="font-semibold text-center">It's for lifetime, no monthly payments!</p>

            </div>
          </div>
          <div className="card w-full max-w-96 bg-base-100 shadow-xl border-2 border-primary scale-105">
            <div className="card-body ">
              <div className="badge badge-ghost">Ultimate</div>
              <h2 className="card-title text-3xl mt-2">
                {" "}
                <span className="text-2xl line-through">$59</span> $39
              </h2>
              <p>Imagination is the only limit!</p>
              <ul className="mt-3 font-semibold">
                {featuresList.map((feature, index) => (
                  <li key={index} className="flex gap-3 mb-4">
                    <Check className={'text-green-400'} /> {feature.title}
                  </li>
                ))}
                {/* <li className="flex gap-3"><Check className="text-green-400"/> Unlimited Boards</li> */}
              </ul>
              <div className="card-actions w-full">
                <button className="btn btn-primary w-full">Buy Now</button>
              </div>
              <p className="font-semibold text-center">It's for lifetime, no monthly payments!</p>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PricingSec;
