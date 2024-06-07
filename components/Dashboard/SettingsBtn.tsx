'use client'

import { deleteBoard } from '@/actions/boardActions'
import { Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'


function SettingsBtn({boardId}:{boardId:string}) {
  const router = useRouter()
    async function deleteBoardFunc(){
      toast.promise(deleteBoard(boardId), {
        loading: 'Deleting board...',
        success: 'Board deleted successfully',
        error: 'Error deleting board'
      })
    }

  
  return (
    <div className="dropdown flex max-sm:dropdown-end">
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
                  <button onClick={()=>router.push('/board/settings/'+boardId)} className=''>Settings</button>
                </li>
                <li>
                  <button onClick={()=>deleteBoardFunc()} className='text-error'>Delete</button>
                </li>
              </ul>
            </div>
  )
}

export default SettingsBtn