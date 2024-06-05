import React from "react";
import NewResponseModal from "./NewResponseModal";
import ResponsesList from "./ResponsesList";

function ResponsesSec({
  boardDataString,
  responsesJson,
  userInfo,
}: {
  boardDataString: string;
  responsesJson: string;
  userInfo: string | undefined;
}) {
  const boardData = JSON.parse(boardDataString);
  const responses = JSON.parse(responsesJson);

  const userInfoJson = userInfo != undefined ? JSON.parse(userInfo) : "";
  return (
    <div>
      <div className="py-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Responses</h1>
          <NewResponseModal boardId={boardData?.id as string} firstName={userInfoJson.firstName}/>
        </div>
      </div>
      <ResponsesList
        boardDataString={JSON.stringify(responses)}
        hidden={false}
      />
    </div>
  );
}

export default ResponsesSec;
