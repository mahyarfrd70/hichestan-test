import Axios from "axios";
import config from './config'
// import Auth from '../auth'

class Api {
    constructor() {
        this.axiosInstance = Axios.create({
            baseURL: config.baseURL,
            headers: config.headers
        });
    }

    buildHeaders = (options , mainHeaders) => {
        let headers = {
            ...mainHeaders , 
            ...options && options.headers && options.headers 
        }
        // if(options && options.auth){
        //     headers.Authorization = `Token ${Auth.auth}`
        // }
        return headers
    }

    axios = (method, url, data, options) => {
        return this.axiosInstance({
            method,
            url,
            headers: this.buildHeaders(options),
            ...(method === "GET" ? { params: data } : { data })
        });
    };

    get = async (path, params, options = {})=> {
        return await this.axios("GET", path, params, options);
    };
    post = async (path, body, options = {})=> {
        return await this.axios("POST", path, body, options);
    };
    put = async (path, body, options = {}) => {
        return await this.axios("PUT", path, body, options);
    };
    delete = async (path, options = {}) => {
        return await this.axios("DELETE", path, undefined, options);
    };
}

let instanceApi = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new Api()
        }
        return instance
    }
})()

export default instanceApi()