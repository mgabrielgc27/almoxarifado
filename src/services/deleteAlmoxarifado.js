import axios from "axios"

const deleteAlmoxarifado = async (id, token) => {


    try {

        const response = await axios.delete(`https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/excluir/${id}`, {
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