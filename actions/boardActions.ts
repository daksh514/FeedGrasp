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
});
export async function createBoard(formData: FormData) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const boardData = {
        title: formData.get('title'),
        description: formData.get('description')
    }
    const validate = boardSchema.safeParse(boardData)
    if (!validate.success) {
        return JSON.stringify({
            status: 'error',
            message: 'An error occurred',
            error: validate.error
        })
    }
    const data = await prisma.board.create({
        data: {
            title: validate.data.title,
            description: validate.data.description as string,
            userId: user?.id as string,
        }
    })
    return JSON.stringify({
        status: 'success',
        message: 'Successfully created board',
        boardId: data.id
    })

}

export async function deleteBoard(boardId: string) {
    try {
        await prisma.response.deleteMany({
            where: {
                boardId: boardId
            }
        })
        await prisma.board.delete({
            where: {
                id: boardId
            }
        })

        
    } catch (error) {
        console.log(error);
    }


    revalidatePath(`/dashboard`)




}