'use client'
import React, { Key,  useState } from "react";
import ResponseCard from "./ResponseCard";
function ResponsesList({ boardDataString, hidden }: { boardDataString: string, hidden: boolean}) {
  const responses = JSON.parse(boardDataString);
  

  return (
    <div className={`${hidden ? 'hidden' : ''}`}>
      {responses.map((response: any, index: any) => (
        <ResponseCard key={index} responseStr={JSON.stringify(response)}/>
      ))}
    </div>
  );
}

export default ResponsesList;
