"use client";
import { ArrowLeft, CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"
import React from "react";

function SettingsNav() {
  const router = useRouter();
  return (
    <nav className="py-8">
      <div className="flex gap-4 items-center">
        <button
          className="border-2 rounded-full border-black/60"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeft
            className="w-10 h-auto transition-all hover:bg-black rounded-full hover:text-white"
            strokeWidth={1}
          />
        </button>
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
    </nav>
  );
}

export default SettingsNav;
