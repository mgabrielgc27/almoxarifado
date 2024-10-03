import React from 'react'

export default function Textarea({name, id, value,  placeholder, className, onChange, required}) {
  return (
    <div>
      <textarea
        required={required}
        name={name} 
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className} ></textarea>
    </div>
  )
}
