// import { jwtDecode } from "jwt-decode";

export const IsLogged = (token) => {
    if (!token) return false;
    else return true;


    // try {
    //     const decoded = jwtDecode(token);
    //     const currentTime = Math.floor(Date.now() / 1000)
    //     console.log(decoded.exp, currentTime)
    //     return decoded.exp > currentTime
    // } catch (error) {
    //     console.log('Erro: ', error.message)
    //     return false
    // }
}