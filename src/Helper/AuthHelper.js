import Axios from "axios";

export function setToken(token){
    sessionStorage.setItem("Token", token)
}
export function getToken(){
    return sessionStorage.getItem("Token")
}
export function deleteToken(){
    sessionStorage.removeItem("Token");
}
export function initialAxios(){
    Axios.defaults.baseURL = "https://api-bellamoon.herokuapp.com/api"
    Axios.interceptors.request.use((config)=>{
        if(getToken()){
            config.headers.Authorization = `Bearer ${getToken()}`
        }
        return config
    })
}