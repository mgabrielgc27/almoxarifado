import axios from "axios";

const getAlmoxarifados = async (token) => {


    try {
        const response = await axios.get("https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/listar", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }

        });
        if (response.status === 200) {
            console.log("Status get: ", response.data.status)
            return response.data.data;
        }

        

    } catch (error) {
        console.log("Erro: ", error.message)
        localStorage.removeItem("authToken")
    }


}

export default getAlmoxarifados