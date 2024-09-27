import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import InputLabel from '../ui/components/InputLabel'
import Button from '../ui/components/Button'
import TableItems from '../ui/partials/TableItems'
import FormNewPost from '../ui/partials/FormNewPost'

import Header from '../ui/layout/Header'
import isTokenValid from '../services/isTokenValid'
import getAlmoxarifados from '../services/getAlmoxarifados'
import addAlmoxarifado from '../services/addAlmoxarifado'
import deleteAlmoxarifado from '../services/deleteAlmoxarifado'
import updateAlmoxarifado from '../services/updateAlmoxarifado'
import FormUpdate from '../ui/partials/FormUpdate'

export default function Almoxarifado() {

  const navigate = useNavigate()

  const [authToken, setAuthToken] = useState()

  const [almoxarifados, setAlmoxarifados] = useState([])

  const [empresaId, setEmpresaId] = useState("")

  const [descricao, setDescricao] = useState("")

  const [tipo, setTipo] = useState("")

  const [isAdding, setIsAdding] = useState(false)

  const [isUpdating, setIsUpdating] = useState(false)

  const [updateId, setUpdateId] = useState()

  useEffect(() => {
    const auToken = JSON.parse(localStorage.getItem("authToken"))

    if (auToken) {
      setAuthToken(auToken)
    }

  }, [])


  useEffect(() => {
    if (authToken) {
      const token = authToken.token
      const exp = authToken.expToken

      // console.log(authToken, token, exp)

      // console.log(isTokenValid(token, exp))

      if (isTokenValid(token, exp)) {
        read()
      } else {
        navigate("/entrar")
      }

    }
  }, [authToken])

  // useEffect(() => {
  //   if(almoxarifados.length > 0)
  //     console.log(almoxarifados)
  // }, [almoxarifados])



  const create = async (e) => {
    e.preventDefault()

    if (!isTokenValid(authToken.token, authToken.expToken)) {
      navigate("/entrar")
      return
    }

    const post = { empresaId, descricao, tipo }

    await addAlmoxarifado(post, authToken.token);
    await read();

    setEmpresaId("")
    setDescricao("")
    setTipo("")
    setIsAdding(false)

  }


  const read = async () => {
    if (!isTokenValid(authToken.token, authToken.expToken)) {
      navigate("/entrar")
      return
    }
    const data = await getAlmoxarifados(authToken.token);
    setAlmoxarifados(data);
  }


  const deletar = async (id) => {
    if (!isTokenValid(authToken.token, authToken.expToken)) {
      navigate("/entrar")
      return
    }

    await deleteAlmoxarifado(id, authToken.token);
    await read();
  }


  const update = async (e) => {
   
    e.preventDefault()
    
    if (!isTokenValid(authToken.token, authToken.expToken)) {
      navigate("/entrar")
      return
    }
    
    console.log(updateId)
    const updatePut = { id: updateId, descricao, tipo}
    
    await updateAlmoxarifado(updatePut, authToken.token)
    
    await read()

    setUpdateId()
    setDescricao("")
    setTipo("")
    setIsUpdating(false)
  }


  const handleClickAdicionar = () => {
    setIsAdding(true)
  }

  const handleClickEditar = (id) => {
    setIsUpdating(true)
    setUpdateId(id)
  }

  const handleClickCancelarAdicionar = () => {

    setIsAdding(false);

  }

  const handleClickCancelarEditar = () => {

    setIsUpdating(false)
  }


  return (
    <>
      <Header />
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
            update={update}
            setDescricao={setDescricao}
            setTipo={setTipo}
            handleClickCancelarEditar={handleClickCancelarEditar} />)

          :

          (<div className='flex flex-col max-w-full px-4 sm:px-6 lg:px-8 mb-8'>
            <div className='flex flex-col w-2/5 py-6'>
              <InputLabel
                Id="barra-pesquisa"
                name="Pesquisa"
                type="text"
                spacing="mt-1" />
            </div>
            <div className='flex flex-col shadow-lg rounded-md bg-white'>
              <div className='flex justify-between items-center mx-6 my-3'>
                <h3 className='font-semibold'>
                  Almoxarifados
                </h3>
                <div>
                  <Button
                    onClick={handleClickAdicionar}
                    className="flex w-full justify-center border rounded-md border-indigo-500 bg-indigo-600 hover:bg-white px-5 py-1.5 text-sm font-semibold leading-6 text-white hover:text-indigo-600 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                    Adicionar
                  </Button>
                </div>
              </div>

              <TableItems
                almoxarifados={almoxarifados}
                deletar={deletar}
                handleClickEditar={handleClickEditar} />

            </div>
          </div>)
      }
    </>
  )
}
