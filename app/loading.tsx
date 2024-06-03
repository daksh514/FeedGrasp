import { Loader2 } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <Loader2 className='animate-spin w-10 h-auto'/>
    </div>
  )
}

export default loading