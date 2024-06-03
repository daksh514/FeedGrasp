import React from "react";
import NewButton from "./NewButton";
import UserButton from "../UserButton";

function Navbar({avatar}:{avatar:string}) {
  return (
    <nav className="flex items-center justify-between">
      <div className="">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
      </div>
      <div className="flex gap-4 items-center">
        <NewButton />
        <UserButton avatar={avatar} />
      </div>
    </nav>
  );
}

export default Navbar;
