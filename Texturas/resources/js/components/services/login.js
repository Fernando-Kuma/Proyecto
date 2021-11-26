import axios from "axios";
import Url from "./utils/Ruta";


const login = async credentials => {
    const {data} = await axios.post(Url.baseUrl + "auth/login", credentials)
    return data
}

export default { login }