 
import axios from 'axios';


const signup = (name, email, password) => {
    return axios
        .post('/auth/signup', { name, email, password })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data
        });
}

const login = (email, password) => {
    return axios
    //tried switching to: http://localhost:3005/api/login : also for signup and logout
        .post('/auth/login', { email, password })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data
        });
}

const logout = () => {
    return axios
        .delete('/auth/logout')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data
        });
}

export { signup, login, logout };