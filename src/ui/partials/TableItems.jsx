import React from 'react'

import DropDownUpdateDelete from '../components/DropDownUpdateDelete'
import TableNoResults from '../components/TableNoResults'

export default function TableItems({ filteredAlmoxarifados, deletar, handleClickEditar }) {
    return (
        <div className='flex flex-col'>
            {filteredAlmoxarifados.length === 0 ?

                <TableNoResults />

                :
                
                (
                    <div className='w-full'>
                        <hr />
                        <div className='flex justify-between mx-6 my-3'>
                            <h3 className='w-2/12 sm:w-1/12 lg:w-1/12 md:-w-1/12 font-semibold'>Id</h3>
                            <h3 className='w-5/12 sm:w-9/12 lg:w-9/12 md:-w-9/12 font-semibold'>Descrição</h3>
                            <h3 className='w-5/12 sm:w-2/12 lg:w-2/12 md:-w-2/12 font-semibold'>Tipo</h3>
                        </div>
                        {filteredAlmoxarifados.map((a, index) => (
                            <div key={index}>
                                <hr />
                                <div className='flex justify-between mx-6 my-3 text-indigo-600'>
                                    <p className='flex items-center w-2/12 sm:w-1/12 lg:w-1/12 md:-w-1/12'>{a.id}</p>
                                    <p className='flex items-center w-5/12 sm:w-9/12 lg:w-9/12 md:-w-9/12 truncate mr-3 lg:mr-0'>{a.descricao}</p>
                                    <div className='flex items-center justify-between w-5/12 sm:w-2/12 lg:w-2/12 md:-w-2/12'>
                                        {a.tipo === 1 ? "Estoque" : a.tipo === 2 ? "Produção" : a.tipo === 3 ? "Quarentena" : "Indefinido" }
                                        <DropDownUpdateDelete
                                            id={a.id}
                                            descricao={a.descricao}
                                            tipo={a.tipo}
                                            deletar={deletar}
                                            handleClickEditar={handleClickEditar} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}
