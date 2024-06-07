import BoardSettingsForm from '@/components/BoardSettings/BoardSettingsForm';
import SettingsNav from '@/components/Settings/SettingsNav';
import prisma from '@/utils/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { unstable_noStore } from 'next/cache';
import { notFound, redirect } from 'next/navigation';
import React from 'react'


async function page({params}:{params:{id: string}}) {
    unstable_noStore()
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) redirect('/api/auth/login')
    const currentBoard = await prisma.board.findUnique({
        where:{
            id: params.id,
        },
        select: {
            responses: {
                select: {
                    title: true,
                    description: true,
                    upvotes: true,
                    createdBy: true,
                    createdAt: true
                }
            },
            id: true,
            title: true,
            description: true,
            userId: true,
            maxFeedbacks: true,
            theme: true,
            isPrivate: true
        }
    })
    if (!currentBoard) notFound()
    if(currentBoard.userId !== user?.id) return <h1>You are not authorized to do this action</h1>
  return (
    <div>
        <div className='widthContainer'>
        <SettingsNav />
        <BoardSettingsForm boardDataStr={JSON.stringify(currentBoard)}/>
        </div>
    </div>
  )
}

export default page