import { Share } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function PageInfoComp({boardInfo, userData}:{boardInfo:string, userData:string}) {
    const boardData = JSON.parse(boardInfo)
    const userInfo = JSON.parse(userData)
  return (
    <div className=" pt-10">
        <div className="card w-full bg-base-300 shadow-md min-h-40 py-4 px-10 rounded-lg flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-2xl font-extrabold  max-md:text-xl">
              {boardData?.title}
            </h1>
            <h1 className="text-xs font-normal to-base-content/60  max-md:text-xl">
              {boardData?.description}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Image
                src={userInfo?.profileImage as string}
                alt="User Image"
                width={100}
                height={100}
                className="rounded-full max-w-8 h-auto aspect-square"
              />
              <div>
                <h1 className="text-sm">
                  {userInfo?.firstName + " " + userInfo?.lastName}
                </h1>
                <p className="text-xs text-base-content/50">
                  {userInfo?.email}
                </p>
              </div>
            </div>
            <div>
              <button className="btn btn-square btn-sm btn-warning rounded-md border-2 border-warning bg-opacity-60">
                <Share className="h-auto w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PageInfoComp