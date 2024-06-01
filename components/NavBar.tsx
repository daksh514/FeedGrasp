import { navBarLinks } from "@/utils/navBarLinks";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";
import UserButton from "./UserButton";
import MobileNav from "./MobileNav";


async function NavBar() {
  

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    console.log("no user");
  }

  return (
    <div>
      <div className="navbar bg-base-100 widthContainer px-4 md:px-8">
        <div className="flex-1">
          <Link className="font-semibold text-xl" href={"/"}>
            FeedGrasp
          </Link>
        </div>
        <div className="flex-none gap-2 ">
          {/* PC NAV */}

          <ul className="menu menu-horizontal px-1 max-md:hidden">
            {navBarLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.to as string}>{link.title}</Link>
              </li>
              // <AniLink to={link.to as string} key={index}>{link.title}</AniLink>
            ))}
          </ul>

          {/* Mobile Nav */}

          {user ? (
            <UserButton avatar={user.picture as string} />
          ) : (
            <>
              <button className="btn btn-neutral h-10 min-h-8 text-white">
                <LoginLink>Log In</LoginLink>
              </button>
            </>
          )}
          <div className="md:hidden ">
            <MobileNav />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
