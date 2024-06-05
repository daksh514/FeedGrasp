
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
        {children}
        <Link className='fixed bottom-8 right-8  ' href={'/'}>

        <div className='flex gap-2 items-center bg-base-300 p-2 rounded-lg'>
            <Image src="/Images/icon.png" width={40} height={40} alt="" className='rounded-md'/>
            <div className="flex flex-col justify-center">

            <h1 className='leading-none'>FeedGrasp</h1>
            <p className='text-black/80 text-xs'>Start Collecting</p>
            </div>


        </div>
        </Link>

    </div>
  )
}

export default layout