import axiosInterceptor from "../axios/axiosInterceptor";

const apiAlmoxarifado = import.meta.env.VITE_API_ALMOXARIFADO

const addAlmoxarifado = async (newPost, token, navigate) => {
    console.log(newPost)

    try {

        const axios = axiosInterceptor(navigate);

        const response = await axios.post(`${apiAlmoxarifado}/criar`, newPost, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        console.log(response.data.message)

    } catch (error) {
        console.log("Erro add: ", error.message)
    }
}

export default addAlmoxarifado