import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/api/auth/me";

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAllMe = () => {
    const config = {
        headers: {
        Authorization: token
        }
}
    const request = axios.post(baseUrl, config)
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
export default { getAllMe, setToken }
