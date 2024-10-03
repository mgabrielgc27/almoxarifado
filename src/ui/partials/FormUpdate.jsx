import React from 'react'

import Label from '../components/Label'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import Form from '../components/Form'
import SelectLabel from '../components/SelectLabel'
import { tiposAlmoxarifados } from '../../services/constants'

export default function FormUpdate({ update, setDescricao, setTipo, handleClickCancelarEditar, valueDescricao, valueTipo }) {
    return (
        <div className="flex flex-col items-center">
            <Form
                onSubmit={(e) => update(e)} >

                <div>
                    <Label
                        spacing="mb-2"
                        htmlFor="descricao" >
                        Descrição
                    </Label>
                    <Textarea
                        required={true}
                        value={valueDescricao}
                        name="descricao"
                        id="descricao"
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Digite a descrição"
                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>

                <div>
                    <SelectLabel
                        name="Tipo"
                        Id="tipo"
                        value={valueTipo}
                        required={true}
                        onChange={(e) => setTipo(e.target.value)}
                        placeholder="Escolha o tipo"
                        options={tiposAlmoxarifados} />
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

            </Form>
        </div>
    )
}
