import axios from "axios";

export default class HttpClient {
 
    get(url: string) {
        return axios.get(url);
    }
}