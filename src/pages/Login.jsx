import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../ui/components/Input'
import Button from '../ui/components/Button'
import InputLabel from '../ui/components/InputLabel'
import { loginFetch } from '../axios/config'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const postLogin = async (e) => {
    e.preventDefault();

    console.log(email, password)

    const login = { empresaId: 1, email: email, senha: password };

    try {
      const response = await loginFetch.post("", {
        body: login
      })

      console.log("resposta: ", response.data)
    } catch (error) {
      console.log("Mensagem de erro: ", error.message)
    }

    navigate("/almoxarifado")
  }
  return (
    <>
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="src\assets\mainIcon.png"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Entre na sua conta
          </h2>
        </div> */}
      <div className='flex flex-col sm:flex-col items-center md:flex-row lg:flex-row'>
      
        <div className="m-10 w-full max-w-80">
          <form onSubmit={(e) => postLogin(e)} className="flex flex-col gap-3">
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
              {/* <div className="flex items-center justify-between">
                <Label
                  Id="password" >
                  Senha
                </Label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div> */}
              <div className="mt-0">
                <Input
                  Id="password"
                  type="password"
                  placeholder="Senha"
                  required={true}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
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

        <div className='flex bg-indigo-600 lg:w-full lg:h-screen md:w-full md:h-screen'>
          
        </div>

      </div>
    </>
  )
}
