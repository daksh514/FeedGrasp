import React from "react";

function FAQSec() {
    const FAQText = [
        {
            title: "What is FeedGrasp?",
            text: "FeedGrasp is a free and open-source feedback tool that allows you to collect feedback from your users and share it with your team."
        },
        {
            title: "How does it work?",
            text: "It works on a simple board system where you just have to create boards and share it to your audience!"
        },
        {
            title: "How can I use it?",
            text: "All you need to do is purchase a plan and use it!"
        },
        {
            title: "How much does it cost?",
            text: "It has two different plans and both of them offers lots and lots of amazing offers!"
        },
        {
            title: "Is is a monthly subscription or one time payment?",
            text: "It is a one time payment, all you need to do is pay once and then it's yours forever!"
        }
    ]
  return (
    <div id="FAQSec">
      <div className="widthContainer">
        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-8">
          <div className="md:w-[38%] w-full ">
            <h1 className="text-2xl font-extrabold max-md:text-xl">
              Frequently Asked Questions
            </h1>
            <p className="text-sm">
              Have questions? Here are the answers to most common questions we
              get asked.
            </p>
          </div>
          <div className="grow md:max-w-[60%] mx-auto w-full">
            <div className="join join-vertical w-full bg-base-200 rounded-md">
                {
                    FAQText.map((content, index) => (
                      <div className="collapse collapse-arrow join-item border-2 border-neutral/5" key={index}>
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                          {content.title}
                        </div>
                        <div className="collapse-content">
                          <p>{content.text}</p>
                        </div>
                      </div>
                    ))
  
                }
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSec;
