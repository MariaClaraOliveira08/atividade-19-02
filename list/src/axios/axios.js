import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    getOrganizadores:()=>api.get("/organizador"),
    getEventos:()=>api.get("/evento")    
}
export default sheets;