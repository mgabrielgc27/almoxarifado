import axios from "axios";

export const loginFetch = axios.create({
    baseURL: "https://compsysweb.pdvfiscal.com.br/api/v1/login-empresas",
    headers: {
        "Content-Type": "application/json"
    }
})



export const almoxarifadoFetch = axios.create({
    baseURL: "https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado",
    headers: {
        "Content-Type": "application/json"
    }
    
})