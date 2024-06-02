import { lemonSqeezyApiInstance } from "@/utils/axios";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";



export async function POST(req: NextRequest) {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user) return Response.json({message: 'Unauthenticated'},{status: 401})
    
    try {
        const data = await req.json()
        if (!data.productId) return Response.json({ message: "Product id is required" }, { status: 400 })

        const response = await lemonSqeezyApiInstance.post('/checkouts', {
            "data": {
                "type": "checkouts",
                attributes: {
                    checkout_data: {
                        custom: {
                            userId: user.id
                        }
                    }
                },
                "relationships": {
                    "store": {
                        "data": {
                            "type": "stores",
                            "id": process.env.LEMON_SQEEZY_STORE_ID?.toString()
                        }
                    },
                    "variant": {
                        "data": {
                            "type": "variants",
                            "id": data.productId.toString()
                        }
                    }
                }
            }
        })

        const checkoutUrl = response.data.data.attributes.url
        // console.log(response.data);
        return Response.json(checkoutUrl, { status: 200 })

    } catch (error) {
        console.log(error);
        return Response.json({ message: "an error occurred" }, { status: 500 })
    }
}