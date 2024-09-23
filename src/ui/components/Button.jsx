import React from 'react'

export default function Button(params) {
    return (
        <>
            <button
                disabled={params.disabled}
                type={params.type}
                value={params.value}
                className={params.className}
                onClick={params.onClick} >
                {params.children}
            </button>
        </>
    )
}
