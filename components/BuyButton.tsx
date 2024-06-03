"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

import React from "react";

function BuyButton({variantId}:{variantId:string}) {
    const router = useRouter();
  async function buyProduct(productId: string) {
    try {
      const res = await axios.post("/api/payment", {
        productId: variantId,
      });

      

      window.open(res.data, "_blank");
    } catch (error:any) {
      console.log(error);
      if(error.response.status===401){
        router.push('/api/auth/login')
      }
    }
  }
  return (
   
  <div className="card-actions w-full">
    <button className="btn btn-primary w-full" onClick={()=>buyProduct(variantId)}>Buy Now</button>
  </div>
  );
}

export default BuyButton;
