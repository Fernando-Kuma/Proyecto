import axios from "axios";
import ruta from "./utils/Ruta";

const baseUrl = ruta.url + "login"
const baseToken = ruta.url + "refresh"

const login = async credentials => {

    const {data} = await axios.post(baseUrl, credentials)
    return data
}

const refreshToken = async() => {
    const {data} = await axios.post(baseToken)
    return data
}

export default { login, refreshToken }