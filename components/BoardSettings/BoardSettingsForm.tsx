"use client";

import { updateProfile } from "@/actions/userActions";
import React from "react";
// import SettingsFormBtn from "./SettingsFormBtn";

import { toast } from "react-hot-toast";
import SettingsFormBtn from "../Settings/SettingsFormBtn";
import { updateBoard } from "@/actions/boardActions";

function BoardSettingsForm({ boardDataStr }: { boardDataStr: string }) {
  const boardData = JSON.parse(boardDataStr);
  async function formSubmit(formData: FormData) {
    const isPrivate = formData.get('isPrivate');
    const theme = formData.get('theme');
    if(!theme) {formData.append('theme',boardData.theme)}
    if (!isPrivate) {formData.append('isPrivate', 'off')}

    const resStr = await updateBoard(boardData.id, formData)
    const res = JSON.parse(resStr);

    if(res.status === 'success') {
        toast.success(res.message)
    } else if (res.status === "error"){
        toast.error(res.message)
    }
    

  }
  return (
    <form action={formSubmit} className="w-full flex flex-col gap-2">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Board Title</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          defaultValue={boardData.title}
          name="boardTitle"
        />
      </label>
      <div className="grid grid-cols-2 mt-3 max-md:grid-cols-1">
        <div className="flex">
          <label className="form-control w-full ">
            <div className="label ">
              <span className="label-text">Board Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-full resize-none "
              placeholder="Bio"
              defaultValue={boardData.description}
              name="boardDescription"
            ></textarea>
          </label>
          <div className="divider divider-horizontal max-md:hidden"></div>
        </div>

        <div className="px-4">
          <label className="label cursor-pointer">
            <span className="label-text text-lg font-semibold">Private</span>
            <input
              type="checkbox"
              defaultChecked={boardData.isPrivate}
              className="checkbox"
              name="isPrivate"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Max Feedbacks</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
              defaultValue={boardData.maxFeedbacks}
              name="maxFeedbacks"
              min={0}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                Name
              </span>
            </div>
            <select className="select select-bordered" name="theme">
              <option selected={boardData.theme === "cupcake"} value={'cupcake'}>
                Light
              </option>
              <option selected={boardData.theme === "dark"} value={'dark'}>Dark</option>
              <option selected={boardData.theme === "sunset"} value={'sunset'}>Sunset</option>
              <option selected={boardData.theme === "bumblebee"} value={'bumblebee'}>Bumblebee</option>
            </select>
            
          </label>
        </div>
      </div>

      <SettingsFormBtn />
    </form>
  );
}

export default BoardSettingsForm;
