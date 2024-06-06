import BoardCard from "@/components/Dashboard/BoardCard";
import Navbar from "@/components/Dashboard/Navbar";
import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",

}

async function page() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if(!user) redirect('api/auth/login')
  const boards = await prisma.board.findMany({
    where: {
      userId: user?.id,
    },
    select: {
      title: true,
      id: true,
      responses: true
    },
  });
  return (
    <div className="widthContainer py-8">
      <div>
        <Navbar avatar={user?.picture as string} />
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 max-sm:grid-cols-1 ">
          {boards.map((board) => {
            return (
              <BoardCard
                key={board.id}
                title={board.title}
                link={board.id as string}
                id={board.id}
                length={board.responses.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
