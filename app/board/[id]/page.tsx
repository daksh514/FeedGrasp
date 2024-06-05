import PageInfoComp from "@/components/BoardPage/PageInfoComp";
import ResponsesSec from "@/components/BoardPage/ResponsesSec";
import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
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
  unstable_noStore()
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

  const {getUser} = getKindeServerSession()
  const user = await getUser()

  const userData = user ? await prisma.user.findUnique({
    where: {
      id: user?.id
    }, 
    select: {
      firstName: true
    }
  }) : undefined

  return (
    <div className=" overflow-x-hidden bg-white min-h-screen">
      <div className="widthContainer pb-10">
        
      <PageInfoComp
        boardInfo={JSON.stringify(boardData)}
        userData={JSON.stringify(userInfo)}
      />
      <ResponsesSec boardDataString={JSON.stringify(boardData)}  responsesJson={JSON.stringify(responses)} userInfo={userData != undefined ? JSON.stringify(userData) : undefined}/>
      </div>
    </div>
  );
}

export default page;
