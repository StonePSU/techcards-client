import axios from 'axios';
import jwtDecode from 'jwt-decode';

const api = (method, url, data) => {
    let token = localStorage.getItem("token");
    setTokenHeader(token);
    return new Promise((resolve, reject) => {
        axios({ method, url, data })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response.data);
            })
    })
}

const setTokenHeader = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.commmon["Authorization"];
    }
}

export { api, setTokenHeader };