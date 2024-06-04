'use client'
import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { votingSystem } from "@/actions/responseActions";


export default function ResponseVotingButtons({responseStr, hasVoted}:{responseStr:string, hasVoted:boolean}) {
const [upVoted, setupVoted] = useState(hasVoted);

const response = JSON.parse(responseStr);
const [voteCount, setVoteCount] = useState(response.upvotes);

    async function onClick(){
        votingSystem(response.id)
      }
      
  return (
    <button
      className={` relative btn btn-primary btn-square  rounded-md   ${
        upVoted ? "" : "bg-green-200/10 btn-outline"
      }`}
      onClick={() => {
        if (!upVoted) {
          setupVoted(true);
          onClick();
          setVoteCount(voteCount + 1);
        }
      }}
    >
      <ArrowUp />
      <div className="badge badge-primary badge-xs -top-1 -left-1 absolute">
        {voteCount}
      </div>
    </button>
  );
}
