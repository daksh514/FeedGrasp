'use client'
import { Settings, SquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import SettingsBtn from "./SettingsBtn";

function BoardCard({ title, link, id }: { title: string; link: string, id:string }) {
  return (
    <div>
      <div className="card w-auto bg-base-300 shadow-xl min-h-0 max-sm:mx-autob">
        <div className="card-body items-start text-center py-5">
          <h2 className="card-title leading-normal my-0">{title}</h2>
          <div className="divider my-0 h-1"></div>
          <div className="flex w-full items-center">
            <p className="text-sm font-normal text-left">Responses: 0</p>

            <SettingsBtn boardId={id}/>
            <button className="btn btn-square btn-xs btn-warning rounded-md border-2 border-warning bg-opacity-60">
              <Link href={`board/${link}`} target="_blank">
                <SquareArrowUpRight className="h-auto w-4" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
