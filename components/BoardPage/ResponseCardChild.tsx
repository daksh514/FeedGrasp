"use client";
import React, { useEffect, useState } from "react";
import ResponseVotingButtons from "./ResponseVotingButtons";

function ResponseCardChild({ responseStr, upvotedByStr, userId }: { responseStr: string, upvotedByStr: string, userId: string }) {
    const [hasUpVoted, sethasUpVoted] = useState(false);
  const response = JSON.parse(responseStr);
  const upvotedBy = JSON.parse(upvotedByStr).upvotedBy;

  console.log(response);

  const ifhasUpVoted = upvotedBy.some((vote: any) => {
    return vote.id === userId;
  });
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body justify-between flex-row items-center relative ">
        <div className="self-start flex flex-col h-full">
          <h2 className="card-title">{response.title}</h2>
          <p>{response.description}</p>
          <p className="absolute bottom-1 text-sm font-medium">By: <span className="font-semibold">{response.createdBy}</span></p>
        </div>
        <div>
          <div className="flex  flex-col gap-2 justify-center">
            <ResponseVotingButtons responseStr={responseStr} hasVoted={ifhasUpVoted} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponseCardChild;
