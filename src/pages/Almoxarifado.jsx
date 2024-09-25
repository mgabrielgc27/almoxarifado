import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import InputLabel from '../ui/components/InputLabel'
import Button from '../ui/components/Button'

import Header from '../ui/layout/Header'
import { almoxarifadoFetch } from '../axios/config'
import { IsLogged } from '../services/homeServices'
import axios from 'axios'

export default function Almoxarifado() {

  const navigate = useNavigate()

  const [almoxarifados, setAlmoxarifados] = useState([])

  useEffect(() => {
    const getAlmoxarifados = async () => {
      const token = localStorage.getItem("authToken")

      console.log(IsLogged(token))

      if (IsLogged(token)) {
        try {
          const response = await axios.get("https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/listar", {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            }

          });
          if (response.status === 200) {
            setAlmoxarifados(response.data.data);
          }

        } catch (error) {
          console.log("Erro: ", error.message)
          localStorage.removeItem("authToken")
            navigate("/")
        }
      } else {
        navigate("/")
      }
    }

    getAlmoxarifados()
  }, [])

  useEffect(() => {
    console.log(almoxarifados)
  }, [almoxarifados])


  return (
    <>
      <Header />
      <div className='flex flex-col max-w-full px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col w-2/5 py-6'>
          <InputLabel
            Id="barra-pesquisa"
            name="Pesquisa"
            type="text"
            spacing="mt-1" />
        </div>
        <div className='flex flex-col rounded-md bg-white'>
          <div className='flex justify-between items-center mx-6 my-3'>
            <h3 className='font-semibold'>
              Almoxarifados
            </h3>
            <div>
              <Button
                className="flex w-full justify-center border rounded-md border-indigo-500 bg-indigo-600 hover:bg-white px-5 py-1.5 text-sm font-semibold leading-6 text-white hover:text-indigo-600 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Adicionar
              </Button>
            </div>
          </div>

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
                        <p className='w-1/12'>{a.empresaId}</p>
                        <p className='w-2/5'>{a.descricao}</p>
                        <p className='w-1/12'>{a.tipo}</p>
                      </div>
                    </>
                  ))}
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
