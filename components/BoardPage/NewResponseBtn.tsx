'use client'
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom"
function NewResponseBtn() {
    const {pending} = useFormStatus()
  return (
    <button
              className={`btn w-full mt-3 ${pending ? "btn-disabled" : ""}`}
              type="submit"
            >
              {!pending ?'Create':
              (
                <Loader2 className="animate-spin"/>
              )
              }
            </button>
  )
}

export default NewResponseBtn