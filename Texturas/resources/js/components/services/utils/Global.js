
let token = null;

const setToken = newToken => {
    if(newToken){
        token = `Bearer ${newToken}`;   
    }
    axios.defaults.headers.common['Authorization'] = token;
}

const deleteToken = () =>{
    token = null;
    delete axios.defaults.headers.common['Authorization'];
}



export default { setToken, deleteToken } ;
