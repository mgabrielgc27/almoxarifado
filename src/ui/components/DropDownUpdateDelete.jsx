import React, { useState, useRef, useEffect } from 'react';

import { MdDelete, MdEdit } from "react-icons/md";

import Button from './Button';

export default function DropDownUpdateDelete({id, descricao, tipo, deletar, handleClickEditar}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickDeletar = async () => {
        await deletar(id)
        setIsOpen(false)
    }

    // Função para alternar a exibição do menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fechar o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <Button
                onClick={toggleMenu}
                className="bg-none border-none cursor-pointer px-3 py rounded-md text-2xl font-semibold text-black hover:bg-gray-100" >
                &#x22EE;
            </Button>
            {isOpen && (
                <div className="flex flex-col gap-2 absolute bg-white shadow-md -top-full right-full rounded-md p-[10px] z-[1]">
                    <Button
                        onClick={() => handleClickEditar(id, descricao, tipo, setIsOpen)}
                        className="flex items-center gap-2 p-1 rounded-md pr-24 text-gray-400  hover:bg-gray-100 hover:text-gray-500" >
                        <MdEdit className='text-2xl'/> Editar
                    </Button>
                    <Button
                        onClick={handleClickDeletar}
                        className="flex items-center gap-2 p-1 rounded-md pr-24 text-gray-400  hover:bg-gray-100 hover:text-gray-500" >
                        <MdDelete className='text-2xl'/> Deletar
                    </Button>
                </div>
            )}
        </div>
    );
};