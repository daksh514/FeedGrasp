import React from "react";

const justDontText = [
    "Ask for feedback from everyone",
    "Look for what you need most",
    "Post polls on every platform",
    "Sort the best feedbacks"
]

function WhyCard() {
  return (
    <div className="card max-w-96 w-full bg-error/60 shadow-xl mx-auto border-2 border-red-700 text-error-content">
      <div className="card-body items-center text-center ">
        <h2 className="card-title  text-2xl font-extrabold mb-2">Just Don&apos;t</h2>
        <ul className="flex flex-col items-start gap-3">
          {justDontText.map((text,index)=>(
            <li key={index} className="font-bold text-md max-md:text-sm">{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhyCard;
