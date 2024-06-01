"use client";
import { navBarLinks } from "@/utils/navBarLinks";
import { CircleX, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function MobileNav() {
  return (
    <div>
      <div className="drawer drawer-end z-40">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
            <Menu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-5">
                <Link className="font-semibold text-xl" href={"/"}>
                  FeedGrasp
                </Link>

                <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
                  <CircleX />
                </label>
              </div>
              {navBarLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-lg font-semibold items-center w-full"
                >
                  <Link
                    href={link.href}
                    className={`w-full text-center items-center justify-center`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
