import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export default function Sidebar({ isSidebarOpen }) {
    // const [sidebarTop, setSidebarTop] = useState(0);

    // useEffect(() => {
    //     const navbar = document.getElementById('navbar');
    //     setSidebarTop(navbar.clientHeight - 1);
    // }, []);

    return (
        <div className="z-50">
            <div className="relative z-50">
                <nav
                    className={`fixed top-0 left-0 bottom-0 flex w-3/4 flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80 transition-all duration-300 ease-in-out transform 
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                // style={{ top: `${sidebarTop}px` }}
                >
                    <div className="px-4 pb-6">

                        <ul className="mb-8 text-sm font-medium">
                            {/* <li>
                                <Link to={"/"} className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600">
                                    <span className="select-none">Home</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to={"/almoxarifado"} className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600">
                                    <span className="select-none">Almoxarifado</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        ></div>
                    )} */}
                </nav>
            </div>
        </div>
    );
};