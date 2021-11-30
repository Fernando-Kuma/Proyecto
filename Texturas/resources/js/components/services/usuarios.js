import axios from 'axios'
import ruta from "./utils/Ruta";

const baseUrl = ruta.url + "users/"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request
}


/*
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const config = {
        headers: {
        Authorization: token
        }
}

const request = axios.post(baseUrl, newObject, config)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const config = {
        headers: {
        Authorization: token
        }
}

const request = axios.put(`${baseUrl}/${id}`, newObject, config)
    return request.then(response => response.data)
}
*/
export default { getAll, create }
