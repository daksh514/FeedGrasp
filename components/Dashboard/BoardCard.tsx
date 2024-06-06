"use client";
import { Settings, SquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import SettingsBtn from "./SettingsBtn";

function BoardCard({
  title,
  link,
  id,
  length
}: {
  title: string;
  link: string;
  id: string;
  length: number;
}) {
  console.log(length);
  return (
    <div>
      <div className="card w-full bg-base-300 shadow-xl min-h-0">
        <div className="card-body items-start py-5 px-4">
          <h2 className="card-title leading-normal my-0">{title}</h2>
          <div className="divider my-0 h-1"></div>
          <div className="flex w-full   items-center justify-between ">
            <p className="text-sm font-normal text-left">Responses: {length}</p>
            <div className="flex justify-self-end">
              <SettingsBtn boardId={id} />
              <button className="btn btn-square btn-xs btn-warning rounded-md border-2 border-warning bg-opacity-60">
                <Link href={`board/${link}`} target="_blank">
                  <SquareArrowUpRight className="h-auto w-4" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
