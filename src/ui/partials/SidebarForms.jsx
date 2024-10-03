import React from 'react'

export default function SidebarForms({ isOpen, children }) {

    return (
        <div className='z-50'>
            <div className='relative z-50'>
                <div className={`fixed top-0 right-0 h-full bg-white p-4 transform transition-transform duration-200 ease-linear z-50 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
