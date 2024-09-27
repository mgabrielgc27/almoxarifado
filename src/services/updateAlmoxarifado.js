import axios from "axios"

const updateAlmoxarifado = async (newData, token) => {

    try {

        const response = await axios.put("https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/alterar", newData, {
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
