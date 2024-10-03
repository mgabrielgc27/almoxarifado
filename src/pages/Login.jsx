import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../ui/components/Button'
import InputLabel from '../ui/components/InputLabel'
import fetchLogin from '../services/fetchLogin'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const login = async (e) => {

    e.preventDefault();

    const postLogin = { empresaId: 1, login: email, senha: password };

    await fetchLogin(postLogin);

    navigate("/almoxarifado")

  }

  return (
    <>
      <div className='flex flex-col sm:flex-col items-center md:flex-row lg:flex-row'>

        <div className="flex items-center justify-center m-10  md:w-2/6 lg:w-2/6 xl:2/6">
          <form onSubmit={(e) => login(e)} className="flex flex-col gap-3 w-80">
            <div>

              <InputLabel
                Id="email"
                name="Faça login"
                type="email"
                placeholder="Email"
                required={true}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)} />

            </div>

            <div>
              
              <InputLabel
                name="Senha"
                Id="password"
                type="password"
                placeholder="Senha"
                required={true}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)} />
            
            </div>

            <div className='mt-4'>
              <Button
                type="submit"
                value="fazer login"
                className="flex w-full justify-center border border-indigo-500 bg-indigo-600 hover:bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-indigo-600 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Entrar
              </Button>
            </div>
          </form>

        </div>

        <div className='flex bg-indigo-600 lg:w-4/6 lg:h-screen md:w-4/6 md:h-screen'>

        </div>

      </div>
    </>
  )
}
