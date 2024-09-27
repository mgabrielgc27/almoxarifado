const isTokenValid = (token, exp) => {
    if(!token) return false

    // console.log(token)
    const expDate = new Date(exp);

    const currentDate = new Date();

    // console.log(expDate, currentDate)

    return expDate > currentDate

}

export default isTokenValid