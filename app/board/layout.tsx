
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
        {children}
        

    </div>
  )
}

export default layout