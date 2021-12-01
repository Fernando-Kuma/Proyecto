import axios from 'axios'
import ruta from "./utils/Ruta";

const baseUrl = ruta.url + "clients"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
}

const create = (object) => {
    const request = axios.post(baseUrl, object)
    return request
}

const update = (object) => {
    const request = axios.put(`${baseUrl}/${object.id}`, object)
    return request
}

const destroy = (object) => {
    const request = axios.delete(`${baseUrl}/${object.id}`, object)
    return request
}


export default { getAll, create, update, destroy }

