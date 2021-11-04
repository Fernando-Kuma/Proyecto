import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/auth";



const login = async credentials => {
    const {data} = await axios.post(baseUrl + "/login", credentials)
    return data
}

export default { login }