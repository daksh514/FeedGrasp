"use server"
import prisma from '@/utils/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidatePath } from 'next/cache';
import * as z from 'zod'

const boardSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
    description: z.string().optional(),
    boardId: z.string().min(1, {
        message: 'Board ID is required'
    })
});
export async function createResponse(formData: FormData) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const boardData = {
        title: formData.get('title'),
        description: formData.get('description'),
        boardId: formData.get('boardId')
    }
    const validate = boardSchema.safeParse(boardData)
    if (!validate.success) {
        return JSON.stringify({
            status: 'error',
            message: 'An error occurred',
            error: validate.error
        })
    }
    const data = await prisma.response.create({
        data: {
            title: validate.data.title,
            description: validate.data.description as string,
            boardId: validate.data.boardId
        }
    })

    revalidatePath(`board/${boardData.boardId}`)
    return JSON.stringify({
        status: 'success',
        message: 'Response added successfully',
        responseId: data.id
    })
}

export async function votingSystem(resId: string){
   const {getUser} = getKindeServerSession()
   const user = await getUser()
   if(user){
    await prisma.response.update({
        where: {
            id: resId
        },
        data: {
            upvotes: {
                increment: 1
            },
            upvotedBy: {
                connect: {
                    id: user?.id
                }
            }

        }
    })
   } else {
    throw new Error("You cannot vote as you are not authenticated")
   }
        
    

}