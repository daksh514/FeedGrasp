import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'

interface userImports{
    
    avatar: string;
}

function UserButton({avatar}: userImports) {
  return (
    <div>
        <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={avatar}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <div className="divider my-0"></div> 
              <li>
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default UserButton