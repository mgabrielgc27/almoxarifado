import React from 'react'

import Label from './Label'

export default function InputLabel(params) {
  return (
    <div>
      <Label
        key={params.key}
        htmlFor={params.Id} >
          {params.name}
      </Label>
      <div className='mt-3'>
        <input
          className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          key={params.key}
          type={params.type}
          id={params.Id}
          required={params.required}
          autoComplete={params.autoComplete}
          onChange={params.onChange}
          placeholder={params.placeholder}
          value={params.value} />
      </div>
    </div>
  )
}