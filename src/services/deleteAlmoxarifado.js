import axiosInterceptor from "../axios/axiosInterceptor";

const apiAlmoxarifado = import.meta.env.VITE_API_ALMOXARIFADO

const deleteAlmoxarifado = async (id, token, navigate) => {


    try {

        const axios = axiosInterceptor(navigate)

        const response = await axios.delete(`${apiAlmoxarifado}/excluir/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        console.log(response.data.message)
        
    } catch (error) {
        console.log("Erro deletar: ", error.message)
    }


}

export default deleteAlmoxarifado