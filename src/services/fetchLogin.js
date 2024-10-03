import axios from "axios"

const apiLogin = import.meta.env.VITE_API_LOGIN

const fetchLogin = async (postLogin) => {

    try {
        const response = await axios.post(apiLogin, postLogin, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log("Resposta login: ", response)

        const token = response.data.data.token
        localStorage.setItem("authToken", JSON.stringify(token))

    } catch (error) {
        console.log("Erro login: ", error.message)
    }
}

export default fetchLogin