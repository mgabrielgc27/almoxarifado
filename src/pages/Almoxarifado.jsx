import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import InputLabel from '../ui/components/InputLabel'
import Button from '../ui/components/Button'
import TableItems from '../ui/partials/TableItems'
import FormNewPost from '../ui/partials/FormNewPost'

import getAlmoxarifados from '../services/getAlmoxarifados'
import addAlmoxarifado from '../services/addAlmoxarifado'
import deleteAlmoxarifado from '../services/deleteAlmoxarifado'
import updateAlmoxarifado from '../services/updateAlmoxarifado'
import FormUpdate from '../ui/partials/FormUpdate'
import NavSideBar from '../ui/partials/NavSideBar'
import SidebarForms from '../ui/partials/SidebarForms'
import Loading from '../ui/components/Loading'

export default function Almoxarifado() {

  const navigate = useNavigate()

  const [authToken, setAuthToken] = useState()

  const [almoxarifados, setAlmoxarifados] = useState([])

  const [empresaId, setEmpresaId] = useState()

  const [descricao, setDescricao] = useState()

  const [tipo, setTipo] = useState()

  const [isAdding, setIsAdding] = useState(false)

  const [isUpdating, setIsUpdating] = useState(false)

  const [updateId, setUpdateId] = useState()

  const [searchItem, setSearchItem] = useState("")

  useEffect(() => {

    const token = JSON.parse(localStorage.getItem("authToken"))

    if (token) {
      setAuthToken(token);
    } else {
      navigate("/entrar")
    }

  }, [])

  useEffect(() => {

    if (authToken)
      read()

  }, [authToken])


  const create = async (e) => {
    e.preventDefault()

    const post = { empresaId, descricao, tipo }

    await addAlmoxarifado(post, authToken, navigate);
    await read();

    setEmpresaId("")
    setDescricao("")
    setTipo("")
    setIsAdding(false)

  }


  const read = async () => {

    const data = await getAlmoxarifados(authToken, navigate);
    setAlmoxarifados(data);
  }


  const deletar = async (id) => {

    await deleteAlmoxarifado(id, authToken, navigate);
    await read();
  }


  const update = async (e) => {

    e.preventDefault()

    const updatePut = { id: updateId, descricao, tipo }

    await updateAlmoxarifado(updatePut, authToken, navigate)

    await read()

    setUpdateId()
    setDescricao("")
    setTipo("")
    setIsUpdating(false)
  }


  const handleClickAdicionar = () => {
    setIsUpdating(false)
    setIsAdding(true)
  }

  const handleClickEditar = (id, description, type, setIsOpen) => {
    setIsAdding(false)
    setIsUpdating(true)
    setIsOpen(false)

    if (id < 1 && id > 3) setUpdateId(0);
    else setUpdateId(id);

    setDescricao(description)
    setTipo(type)

  }

  const handleClickCancelarAdicionar = () => {

    setIsAdding(false);

  }

  const handleClickCancelarEditar = () => {

    setIsUpdating(false)
  }

  const filteredAlmoxarifados = almoxarifados.filter((almox) => {
    return (
      almox.id.toString().includes(searchItem) ||
      almox.descricao.toLowerCase().includes(searchItem.toLowerCase())
    );
  });


  return (
    <>
      {almoxarifados.length === 0 ?

        <Loading />

        :

        <>
          <NavSideBar />

          <SidebarForms isOpen={isAdding ? isAdding : isUpdating}>
            {isAdding ?

              (<FormNewPost
                create={create}
                data={{ empresaId, descricao, tipo }}
                setEmpresaId={setEmpresaId}
                setDescricao={setDescricao}
                setTipo={setTipo}
                handleClickCancelar={handleClickCancelarAdicionar} />)

              :

              isUpdating ?

                (<FormUpdate
                  valueDescricao={descricao}
                  valueTipo={tipo}
                  update={update}
                  setDescricao={setDescricao}
                  setTipo={setTipo}
                  handleClickCancelarEditar={handleClickCancelarEditar} />)

                :

                (<div className="lg:w-96 md:w-96 p-4">

                </div>)
            }

          </SidebarForms>

          <div className='flex flex-col max-w-full px-4 sm:px-6 lg:px-8 mb-8'>
            <div className='flex flex-col w-2/5 py-6'>
              <InputLabel
                onChange={(e) => setSearchItem(e.target.value)}
                Id="barra-pesquisa"
                name="Pesquisa"
                type="text"
                spacing="mt-1" />
            </div>
            <div className='flex flex-col shadow-lg rounded-md bg-white'>
              <div className='flex justify-between items-center mx-6 my-3'>
                <h3 className='font-semibold w-11/12'>
                  Almoxarifados
                </h3>
                <div className='lg:w-1/12'>
                  <div>
                    <Button
                      onClick={handleClickAdicionar}
                      className="flex w-full justify-center border rounded-md border-indigo-500 bg-indigo-600 hover:bg-white px-5 py-1.5 text-sm font-semibold leading-6 text-white hover:text-indigo-600 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>

              <TableItems
                filteredAlmoxarifados={filteredAlmoxarifados}
                deletar={deletar}
                handleClickEditar={handleClickEditar} />

            </div>

          </div>
        </>}
    </>
  )
}
