import React from 'react'

import DropDownUpdateDelete from '../components/DropDownUpdateDelete'

export default function TableItems({ almoxarifados, deletar, handleClickEditar }) {
    return (
        <div className='flex flex-col'>
            {almoxarifados.length === 0 ? <p>Carregando...</p> :
                (
                    <>
                        <hr />
                        <div className='flex justify-between mx-6 my-3'>
                            <h3 className='w-1/12 font-semibold'>Id</h3>
                            <h3 className='w-2/5 font-semibold'>Descrição</h3>
                            <h3 className='w-1/12 font-semibold'>Tipo</h3>
                        </div>
                        {almoxarifados.map((a, index) => (
                            <div key={index}>
                                <hr/>
                                <div className='flex justify-between mx-6 my-3 text-indigo-600'>
                                    <p className='flex items-center w-1/12'>{a.id}</p>
                                    <p className='flex items-center w-2/5'>{a.descricao}</p>
                                    <div className='flex items-center justify-between w-1/12'>
                                        {a.tipo}
                                        <DropDownUpdateDelete 
                                            id={a.id}
                                            deletar={deletar}
                                            handleClickEditar={handleClickEditar} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )
            }
        </div>
    )
}
