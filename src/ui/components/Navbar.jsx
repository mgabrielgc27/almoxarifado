import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

export default function Navbar({ toggleSidebar, isSidebarOpen }) {


    const location = useLocation();

    // Função que define o breadcrumb com base na localização
    const getBreadcrumb = () => {
        const path = location.pathname;
        const breadcrumbItems = [];

        if (path === "/") {
            breadcrumbItems.push({ name: "Home", path: "/" });
        } else if (path === "/almoxarifado") {
            breadcrumbItems.push({ name: "Home", path: "/" });
            breadcrumbItems.push({ name: "Almoxarifado", path: "/almoxarifado" });
        }

        return breadcrumbItems;
    };

    const breadcrumb = getBreadcrumb();

    return (
        <nav className="sticky top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between transform transition-transform duration-200 ease-linear">
            {/* Breadcrumb */}
            <ul className="hidden flex-row items-center py-4 text-lg text-white sm:flex">
                {breadcrumb.map((item, index) => (
                    <li key={index} className="inline">
                        {index < breadcrumb.length - 1 ? (
                            <Link to={item.path} className="text-white hover:underline">
                                {item.name}
                            </Link>
                        ) : (
                            <span>{item.name}</span>
                        )}
                        {index < breadcrumb.length - 1 && <span className="mx-2">{'>'}</span>}
                    </li>
                ))}
            </ul>
            <button
                type="button"
                className="py-4 text-2xl text-white hover:text-gray-200"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? (

                    <IoMdClose className='text-4xl' />

                ) : (

                    <HiBars3 className='text-4xl' />

                )}
            </button>
        </nav>
    );
};
