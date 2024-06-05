import SettingsForm from "@/components/Settings/SettingsForm";
import SettingsNav from "@/components/Settings/SettingsNav";
import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { unstable_noStore } from "next/cache";


async function page() {
    unstable_noStore()
    const { getUser } = getKindeServerSession();
    const user = await getUser()
    if(!user) redirect('/api/auth/login')
    const userId = user.id
    const userData = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            firstName: true,
            lastName: true,
            email: true,
            id: true
        }
    })
  return (
    <div>
      <div className="widthContainer max-w-4xl">
        <SettingsNav/>
        <SettingsForm userDataStr={JSON.stringify(userData)}/>
      </div>
    </div>
  );
}

export default page;
