import PageInfoComp from "@/components/BoardPage/PageInfoComp";
import ResponsesSec from "@/components/BoardPage/ResponsesSec";
import prisma from "@/utils/db";
import { Metadata } from "next";
import React from "react";


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const boardData = await prisma.board.findUnique({
    where: {
      id: params.id,
    },
    select: {
      title: true,
      description: true
    },
  });
  return {
    title: boardData?.title,
    description: boardData?.description,
    
  }

}

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
      }, orderBy: {
        createdAt: "desc"
      }
    })
    return responses
  }

  const responses = await findResponses()

  return (
    <div className=" overflow-x-hidden bg-white min-h-screen">
      <div className="widthContainer pb-10">
        
      <PageInfoComp
        boardInfo={JSON.stringify(boardData)}
        userData={JSON.stringify(userInfo)}
      />
      <ResponsesSec boardDataString={JSON.stringify(boardData)} findResponses={findResponses} responsesJson={JSON.stringify(responses)}/>
      </div>
    </div>
  );
}

export default page;
