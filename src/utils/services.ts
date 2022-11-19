import axios, { AxiosRequestConfig } from "axios"
import configs from "./configs"

export const nakedAPI = axios.create({
    baseURL: configs.API_ENDPONT,
    headers: {"Content-Type": "application/json"}
})

export const SecureAPI = axios.create({
    baseURL: configs.API_ENDPONT,
    headers: {"Content-Type": "application/json"}
})

SecureAPI.interceptors.request.use((config: any) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

SecureAPI.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if (error.response) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
})

nakedAPI.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if (error.response) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
})
