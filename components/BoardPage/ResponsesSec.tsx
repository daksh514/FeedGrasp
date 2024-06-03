'use client'
import React, { useEffect, useState } from "react";
import NewResponseModal from "./NewResponseModal";
import ResponsesList from "./ResponsesList";

function ResponsesSec({ boardDataString, responsesJson, findResponses }: { boardDataString: string, responsesJson: string, findResponses: any }) {
  const boardData = JSON.parse(boardDataString);
  const responses = JSON.parse(responsesJson);
  const [responsesState, setResponsesState] = useState({});
  
  useEffect(() => {
  }, [responsesState]);
  return (
    <div>
      
      <div className="py-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Responses</h1>
          <NewResponseModal boardId={boardData?.id as string}  findResponses={findResponses}/>
        </div>
      </div>
      <ResponsesList boardDataString={JSON.stringify(responses) } hidden={false} />
      
      
    </div>
  );
}

export default ResponsesSec;
