import PageInfoComp from "@/components/BoardPage/PageInfoComp";
import ResponsesSec from "@/components/BoardPage/ResponsesSec";
import prisma from "@/utils/db";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const boardData = await prisma.board.findUnique({
    where: {
      id: params.id,
    },
    select: {
      title: true,
      description: true,
      userId: true,
      id: true
    },
  });

  const userInfo = await prisma.user.findUnique({
    where: {
      id: boardData?.userId as string,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      profileImage: true,
    },
  });

  async function findResponses(){
    "use server"
    const responses = await prisma.response.findMany({
      where: {
          boardId: boardData?.id as string
      }
    })
    return responses
  }

  const responses = await findResponses()

  return (
    <div className="widthContainer overflow-x-hidden">
      <PageInfoComp
        boardInfo={JSON.stringify(boardData)}
        userData={JSON.stringify(userInfo)}
      />
      <ResponsesSec boardDataString={JSON.stringify(boardData)} findResponses={findResponses} responsesJson={JSON.stringify(responses)}/>
    </div>
  );
}

export default page;
