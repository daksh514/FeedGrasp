'use client'

import { deleteBoard } from '@/actions/boardActions'
import { Settings } from 'lucide-react'
import React from 'react'

function SettingsBtn({boardId}:{boardId:string}) {
    async function deleteBoardFunc(){
        await deleteBoard(boardId)
        window.location.reload()
    }
  return (
    <div className="dropdown flex ">
              <button
                role="button"
                tabIndex={0}
                className=" mr-2 btn btn-square btn-xs btn-success rounded-md border-2 border-success bg-opacity-60"
              >
                <Settings className="h-auto w-4" />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 top-6 gap-2"
              >
                <li>
                  <button onClick={()=>console.log('clicks')} className=''>Edit</button>
                </li>
                <li>
                  <button onClick={()=>deleteBoardFunc()} className='text-error'>Delete</button>
                </li>
              </ul>
            </div>
  )
}

export default SettingsBtn