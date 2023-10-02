import axios from 'axios';
import { accountService } from "@/_services";
import router from "@/router";

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api',
});

/**
 * Add a request interceptor
 */
Axios.interceptors.request.use(request => {
    let token = accountService.getToken();
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
})

/**
 * Add a response interceptor
 */

Axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        accountService.logout();
        router.push('/login');
    }
    return Promise.reject(error);
});
export default Axios;