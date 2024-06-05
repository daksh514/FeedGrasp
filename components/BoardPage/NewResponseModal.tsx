"use client";
import {  PlusSquare } from "lucide-react";
import React, {  useContext, useState } from "react";
import FormMessage from "../extras/FormMessage";
// import NewButtonBtn from "./NewButtonBtn";

import NewResponseBtn from "./NewResponseBtn";
import { createResponse } from "@/actions/responseActions";
// import FormMessage from "../extras/formMessage";

function NewResponseModal({boardId, firstName}:{boardId:string, firstName:string,}) {
  
  const [isError, setisError] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState(firstName);
  const submitAction = async (formData: FormData) => {
    console.log(formData.get('byName'));
    formData.append('boardId', boardId)
    if(firstName !== undefined){
      formData.append('byName', firstName)
    }
    const res = await createResponse(formData);
    var resJson = JSON.parse(res as string);
    if (resJson.error) {
      setisError(true);
      setMessage(resJson.error.issues[0].message);
    } else {
      setisError(false);
      setMessage(resJson.message);
      setTitle("");
      setDescription("");

    }
  };
  return (  
    <div>
      <button
        className={`btn  min-h-0 h-12 `}
        onClick={() => {
          const modal = document.getElementById("my_modal_3");
          if (modal instanceof HTMLDialogElement) {
            modal.showModal();
          }
        }}
      >
        <PlusSquare className="p-0 h-auto w-5 max-sm:hidden " />
        Add Response
      </button>

      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-6"
              onClick={() => {
                setMessage("");
                setTitle("");
                setDescription("");
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">New Response</h3>
          <div className="divider my-1"></div>
          <form action={submitAction}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full "
                name="byName"
                onChange={(e) => {
                  setMessage("");
                  setName(e.target.value);
                }}
                value={name}
                disabled={firstName != undefined}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Response Title</span>
              </div>
              <input
                type="text"
                placeholder="Yes that would be great!"
                className="input input-bordered w-full "
                name="title"
                onChange={(e) => {
                  setMessage("");
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </label>
            <label className="form-control w-full mt-2 ">
              <div className="label">
                <span className="label-text">Response Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full resize-none"
                placeholder="Adding that feature would make this webapp look cooler!"
                rows={3}
                value={description}
                onChange={(e) => {
                  setMessage("");
                  setDescription(e.target.value);
                  const value = e.target.value;
                  if (value.length > 200) {
                    const newVal = value.slice(0, 200);
                    setDescription(newVal);
                  }
                  () => {};
                }}
                name="description"
              ></textarea>
            </label>
            <FormMessage error={isError} message={message} />
            <NewResponseBtn />
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              setMessage("");
              setTitle("");
              setDescription("");
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default NewResponseModal;
