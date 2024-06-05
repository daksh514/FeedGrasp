"use server"
import prisma from '@/utils/db'
import * as z from 'zod'

const userSchema = z.object({
    firstName: z.string().min(3,
        { message: 'First name must be at least 3 characters' }
    ),
    lastName: z.string().optional(),
    userId: z.string()
})



export async function updateProfile(formData: FormData) {
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        userId: formData.get('userId')
    }
    const validated = userSchema.safeParse(userData)
    if (!validated.success) {
        return JSON.stringify({
            status: 'error',
            message: validated.error.issues[0].message,
        })
    }
    try {
        await prisma.user.update({
            where: {
                id: validated.data.userId

            },
            data: {
                firstName: validated.data.firstName,
                lastName: validated.data.lastName
            }
        })

        return JSON.stringify({
            status: 'success',
            message: 'Profile Updated Successfuly',
        })
    } catch (error) {
        console.log(error)
        return JSON.stringify({
            status: 'error',
            message: 'An error occured, try again later!',
        })
    }

}