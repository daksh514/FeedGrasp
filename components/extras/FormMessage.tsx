import React from "react";

function FormMessage({message, error}: {message: string, error: boolean}) {
  return (
    <div role="alert" className={`alert ${error===true ? 'alert-error' : 'alert-success'} mt-3 flex justify-center min-h-0 h-12 ${message===""?'hidden':'flex'}`}>
      
      <span className="text-center w-full font-semibold ">{message}</span>
    </div>
  );
}

export default FormMessage;
