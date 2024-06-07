import PageInfoComp from "@/components/BoardPage/PageInfoComp";
import ResponsesSec from "@/components/BoardPage/ResponsesSec";
import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      id: true,
      theme: true
    },
  });

  if(!boardData) return notFound()

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
  // console.log(responses);

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
    <div className={` overflow-x-hidden  min-h-screen  ${boardData.theme === "cupcake" || boardData.theme === "bumblebee" ? "bg-white":""}`} data-theme={boardData.theme}>
      <div className="widthContainer pb-10">
        
      <PageInfoComp
        boardInfo={JSON.stringify(boardData)}
        userData={JSON.stringify(userInfo)}
      />
      <ResponsesSec boardDataString={JSON.stringify(boardData)}  responsesJson={JSON.stringify(responses)} userInfo={userData != undefined ? JSON.stringify(userData) : undefined}/>
      </div>
      <Link className='fixed bottom-8 right-8  ' href={'/'}>

        <div className='flex gap-2 items-center bg-base-300 p-2 rounded-lg'>
            <Image src="/Images/icon.png" width={40} height={40} alt="" className='rounded-md'/>
            <div className="flex flex-col justify-center">

            <h1 className='leading-none'>FeedGrasp</h1>
            <p className='text-base-content/80 text-xs'>Start Collecting</p>
            </div>


        </div>
        </Link>
    </div>
  );
}

export default page;
