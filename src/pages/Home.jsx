import React from 'react'

import { useNavigate } from 'react-router-dom'

import Button from '../ui/components/Button'
import NavSideBar from '../ui/partials/NavSideBar'

export default function Home() {

    const navigate = useNavigate()

    const handleClickLogin = () => {
        const token = JSON.parse(localStorage.getItem("authToken"))

        if(token) navigate("/almoxarifado");
        else navigate("/entrar"); 
            
    }

    return (
        <>
            <NavSideBar/>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                        <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            

                            <div className="relative max-w-xs ml-auto">
                                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img className="lg:w-80 lg:h-80 md:w-80 md:h-80 sm:w-60 sm:h-60 w-60 l-60 transition-all" src="src\assets\homeIcon.jpg" alt="" />
                                </div>

                                <div className="absolute bottom-0 -left-16">
                                    <div className="bg-yellow-300">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Sistema de almoxarifados.</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">Criar, alterar, excluir e ver todos os almoxarifados cadastrados na empresa.</p>

                            <Button
                                onClick={handleClickLogin}
                                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button" >
                                Entre aqui
                            </Button>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

