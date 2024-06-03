"use client";
import { createBoard } from "@/actions/boardActions";
import { Plus, PlusCircle, PlusSquare } from "lucide-react";
import React, { useEffect, useState } from "react";
import FormMessage from "../extras/FormMessage";
import NewButtonBtn from "./NewButtonBtn";
import { redirect } from "next/navigation";
// import FormMessage from "../extras/formMessage";

function NewButton() {
  const [isError, setisError] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitAction = async (formData: FormData) => {
    const res = await createBoard(formData);
    var resJson = JSON.parse(res as string);
    if (resJson.error) {
      setisError(true);
      setMessage(resJson.error.issues[0].message);
    } else {
      setisError(false);
      setMessage(resJson.message);
      setTitle("");
      setDescription("");
      redirect(`/board/${resJson.boardId}`)
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
        New Board
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
          <h3 className="font-bold text-lg">Create Board</h3>
          <div className="divider my-1"></div>
          <form action={submitAction}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Board Title</span>
              </div>
              <input
                type="text"
                placeholder="Should I close this project?"
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
                <span className="label-text">Board Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full resize-none"
                placeholder="I really dont want to continue this project, what do you guys think?"
                rows={3}
                value={description}
                onChange={(e) => {
                  setMessage("");
                  setDescription(e.target.value);
                  const value = e.target.value;
                  if (value.length > 30) {
                    const newVal = value.slice(0, 200);
                    setDescription(newVal);
                  }
                  () => {};
                }}
                name="description"
              ></textarea>
            </label>
            <FormMessage error={isError} message={message} />
            <NewButtonBtn />
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

export default NewButton;
