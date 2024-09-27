import axios from "axios";

const addAlmoxarifado = async (newPost, token) => {
    console.log(newPost)
    try {

        const response = await axios.post("https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/criar", newPost, {
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