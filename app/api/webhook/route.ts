import prisma from "@/utils/db";
import crypto from "crypto";
import { unstable_noStore as noStore} from "next/cache";

export async function POST(req: Request) {
  noStore()
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.LEMON_SQEEZY_WEBHOOK_SIGNATURE as string;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }


    // Logic according to event
    if (eventType === "order_created") {
      const userId:string = body.meta.custom_data.userId;
      const isSuccessful = body.data.attributes.status === "paid";
      const variant = body.data.attributes.first_order_item.variant_id
      
      
      if(isSuccessful) {


        await prisma.user.update({
          where: {
            id: userId
          },
          data: {
              planBought: variant === 401668 ? 'Starter' : 'Ultimate'
          }
        })


      }
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}