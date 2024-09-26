import React from 'react'

import DropDownUpdateDelete from '../components/DropDownUpdateDelete'

export default function TableItems({ almoxarifados }) {
    return (
        <div className='flex flex-col'>
            {almoxarifados.length === 0 ? <p>Carregando...</p> :
                (
                    <>
                        <hr />
                        <div className='flex justify-between mx-6 my-3'>
                            <h3 className='w-1/12 font-semibold'>Id Empresa</h3>
                            <h3 className='w-2/5 font-semibold'>Descrição</h3>
                            <h3 className='w-1/12 font-semibold'>Tipo</h3>
                        </div>
                        {almoxarifados.map(a => (
                            <>
                                <hr />
                                <div className='flex justify-between mx-6 my-3 text-indigo-600'>
                                    <p className='flex items-center w-1/12'>{a.empresaId}</p>
                                    <p className='flex items-center w-2/5'>{a.descricao}</p>
                                    <p className='flex items-center justify-between w-1/12'>
                                        {a.tipo}
                                        <DropDownUpdateDelete/>
                                    </p>
                                </div>
                            </>
                        ))}
                    </>
                )
            }
        </div>
    )
}
