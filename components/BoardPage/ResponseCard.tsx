import React   from "react";
import ResponseVotingButtons from "./ResponseVotingButtons";
import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ResponseCardChild from "./ResponseCardChild";

async function getData(resId: string){
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  const votedByIds = await prisma.response.findUnique({
    where: {
      id: resId,
    },
    select: {
      upvotedBy: {
        select: {
          id: true,
        }
      }
    },
  });

  return votedByIds
}





async function ResponseCard({ responseStr }: { responseStr: string }) {
  const response = JSON.parse(responseStr);
  const votedByIds = await getData(response.id)
  const {getUser} = getKindeServerSession()
  const user = await getUser()


  return (
    <div>
      <ResponseCardChild responseStr={responseStr} upvotedByStr={JSON.stringify(votedByIds)} userId={user?.id as string}/>
    </div>
  );
}

export default ResponseCard;
