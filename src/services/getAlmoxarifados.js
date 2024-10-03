import axiosInterceptor from "../axios/axiosInterceptor";

const apiAlmoxarifado = import.meta.env.VITE_API_ALMOXARIFADO

const getAlmoxarifados = async (token, navigate) => {
    console.log(token)

    const axios = axiosInterceptor(navigate)

    try {

        const response = await axios.get(`${apiAlmoxarifado}/listar`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }

        });

        console.log("Status get: ", response.status)
        return response.data.data;


    } catch (error) {
        console.log("Erro get: ", error.message)
    }


}

export default getAlmoxarifados