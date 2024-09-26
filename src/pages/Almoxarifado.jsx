import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import InputLabel from '../ui/components/InputLabel'
import Button from '../ui/components/Button'
import TableItems from '../ui/partials/TableItems'

import Header from '../ui/layout/Header'
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
          navigate("/entrar")
        }
      } else {
        navigate("/entrar")
      }
    }

    getAlmoxarifados()
  }, [])

  useEffect(() => {
    console.log(almoxarifados)
  }, [almoxarifados])

  const deleteAlmoxarifado = (id) => {
    try {

      const response = axios.delete(`https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/excluir/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      
    } catch (error) {
      console.log("Erro deletar: ", error.message)
    }
  }

  const addAlmoxarifado = (data) => {
    try {
      
        const response = axios.post("https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/criar", data, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })

    } catch (error) {
      
    }
  }

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

          <TableItems
            almoxarifados={almoxarifados} />
          
        </div>
      </div>
    </>
  )
}
