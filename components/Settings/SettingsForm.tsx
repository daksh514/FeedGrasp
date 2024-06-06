"use client";

import { updateProfile } from "@/actions/userActions";
import React from "react";
import SettingsFormBtn from "./SettingsFormBtn";
import {toast} from 'react-hot-toast';

function SettingsForm({userDataStr}:{userDataStr:string}) {
    const userData = JSON.parse(userDataStr);
    async function formSubmit(formData:FormData){
      formData.append("userId", userData.id);
      const res = await updateProfile(formData);
      const parsedRes = JSON.parse(res);
      if(parsedRes.status !== 'error'){
        toast.success(parsedRes.message)
      } else {
        toast.error(parsedRes.message)
      }
    }
  return (
    
    <form action={formSubmit} className="w-full flex flex-col gap-2">

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">First Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          defaultValue={userData.firstName}
          name="firstName"
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Last Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          defaultValue={userData.lastName}
          name="lastName"
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          defaultValue={userData.email}
          disabled={true}
          
        />
      </label>
      <SettingsFormBtn/>
    </form>
  );
}

export default SettingsForm;
