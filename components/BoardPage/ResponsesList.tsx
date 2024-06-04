
import React from "react";
import ResponseCard from "./ResponseCard";


async function ResponsesList({ boardDataString, hidden }: { boardDataString: string, hidden: boolean}) {
  const responses = JSON.parse(boardDataString);
  

  return (
    <div className="flex flex-col gap-4">
      {responses.map((response: any, index: any) => (
        <ResponseCard key={index} responseStr={JSON.stringify(response)}/>
      ))}
    </div>
  );
}

export default ResponsesList;
