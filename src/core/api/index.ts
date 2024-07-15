import { API_TIMEOUT_MS, APIInstance } from "src/models/api";
import axios from "axios";

const baseApi = axios.create({
    baseURL: process.env.SERVER_URL,
    timeout: API_TIMEOUT_MS
})


export class API {
    instance: APIInstance
    apiKey: string;
    
    constructor(instance:APIInstance, apiKey?: string){
        this.instance = instance || baseApi
        this.apiKey = apiKey || ""
    }

    public post<T>(endpoint:string, body: Record<string, unknown>):Promise<T>{
        return this.instance.post(endpoint, body)
    }

    public get<T>(endpoint:string, params: string = ""):Promise<T>{
        return this.instance.get(`${endpoint}${params}`);  
    }

    public put<T>(endpoint:string, body: Record<string, unknown>):Promise<T>{
        return this.instance.put(endpoint, body)
    }
    
    public delete<T>(endpoint:string):Promise<T>{
        return this.instance.delete(endpoint);  
    }
}
