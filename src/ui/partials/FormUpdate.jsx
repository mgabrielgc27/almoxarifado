import React from 'react'

import Label from '../components/Label'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import InputLabel from '../components/InputLabel'

export default function FormUpdate({ update, setDescricao, setTipo, handleClickCancelarEditar }) {
    return (
        <div className="flex flex-col items-center mt-32">
            <form className="flex flex-col gap-2 lg:w-2/6 md:w-3/6 bg-white rounded-lg shadow-xl p-4"
                onSubmit={(e) => update(e)}>

                <div>
                    <Label
                        spacing="mb-2"
                        htmlFor="descricao" >
                        Descrição
                    </Label>
                    <Textarea
                        required={true}
                        name="descricao"
                        id="descricao"
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Digite a descrição"
                        className="w-full" />
                </div>

                <div>
                    <InputLabel
                        name="Tipo"
                        Id="id-tipo"
                        required={true}
                        onChange={(e) => setTipo(e.target.value)}
                        placeholder="Digite o tipo" />
                </div>

                <div className='flex justify-between gap-1 mt-3'>
                    <Button
                        type="submit"
                        value="enviar new post"
                        className="flex w-full justify-center border border-indigo-500 bg-indigo-600 hover:bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-indigo-600 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                        Enviar
                    </Button>
                    <Button
                        onClick={handleClickCancelarEditar}
                        value="cancelar"
                        className="flex w-full justify-center border border-red-500 bg-red-500 hover:bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-red-500 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500" >
                        Cancelar
                    </Button>
                </div>

            </form>
        </div>
    )
}
