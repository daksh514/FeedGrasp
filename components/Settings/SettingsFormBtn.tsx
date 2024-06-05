'use client'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

function SettingsFormBtn() {
    const {pending} = useFormStatus()
  return (
    <button className="btn w-full mt-4 btn-warning">{!pending ? 'Update Profile': <Loader2 className='animate-spin'/>}</button>
    
  )
}

export default SettingsFormBtn