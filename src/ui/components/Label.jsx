import React from 'react'

export default function Label(params) {
    return (
        <div>
            <label
                className={`block text-sm font-medium leading-6 text-gray-900 ${params.spacing ? params.spacing : ""}`}
                key={params.key}
                htmlFor={params.Id} >
                {params.children}
            </label>
        </div>
    )
}
