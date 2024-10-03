import React from 'react'

import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
    return (
        <div
            className='flex w-full h-screen items-center justify-center text-5xl animate-spin'>
            <ImSpinner8 />
        </div>
    )
}
