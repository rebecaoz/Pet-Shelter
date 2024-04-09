import axios from "axios";

class HTTPClient {
    constructor(){
        this.instance = axios.create({
            baseURL: "http://0.0.0.0:5000",
            withCredentials: true,
        })
    }

    getPets(){
        return this.instance.get("/pet/")
    }

    createPet(data){
        return this.instance.post("/pet/", data)
    }
}

export default HTTPClient;