import React from 'react'

export default function Form({onSubmit, children}) {
  return (
    <div>
        
        <form
            onSubmit={onSubmit}
            className="flex flex-col gap-2 lg:w-96 md:w-96 p-4" >
            {children}
        </form>
      
    </div>
  )
}
