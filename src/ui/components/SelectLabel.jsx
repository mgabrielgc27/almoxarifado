import React from 'react'
import Label from './Label'

export default function SelectLabel({ Id, name, spacing, value, onChange, required, placeholder, options }) {
    return (
        <div className=''>
            <Label
                Id={Id} >
                {name}
            </Label>
            <div className={spacing ? spacing : "mt-2"}>
                <select
                    className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id={Id}
                    value={value}
                    onChange={onChange}
                    required={required} >
                    <option value="">{placeholder}</option>
                    {options.map((o, index) => (<option key={index} value={o.value}>{o.label}</option>))}
                </select>
            </div>
        </div>
    )
}
