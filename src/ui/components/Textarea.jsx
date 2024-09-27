import React from 'react'

export default function Textarea({name, id, placeholder, className, onChange, required}) {
  return (
    <div>
      <textarea
        required={required}
        name={name} 
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={className} ></textarea>
    </div>
  )
}
