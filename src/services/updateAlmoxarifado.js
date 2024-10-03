import axiosInterceptor from "../axios/axiosInterceptor";

const apiAlmoxarifado = import.meta.env.VITE_API_ALMOXARIFADO

const updateAlmoxarifado = async (newData, token, navigate) => {

    try {

        const axios = axiosInterceptor(navigate)

        const response = await axios.put(`${apiAlmoxarifado}/alterar`, newData, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        console.log(response.data.message)

    } catch (error) {
        console.log("Erro update: ", error.message)
    }
}

export default updateAlmoxarifado
