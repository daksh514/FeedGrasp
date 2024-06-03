
import { LoaderCircle } from 'lucide-react'
import React from 'react'

function loading() {
   
    
  return (
    <div className={'w-screen h-screen items-center justify-center flex text-2xl gap-2'}>
        Loading Results <LoaderCircle className='animate-spin'/>
    </div>
  )
}

export default loading