import axios from 'axios'

class ResquestService {
  
    constructor(){
        this.API_BASE_URL= `http://localhost:8080`
    }


    getUsers(){
        return axios.get(`${this.API_BASE_URL}/users`)
    }
    getUserById(id){
        return axios.get(`${this.API_BASE_URL}/user/${id}`)
    }
    getPoints(){
        return axios.get(`${this.API_BASE_URL}/points`)
    }
    getPointById(id){
        return axios.get(`${this.API_BASE_URL}/point/${id}`)
    }

}

export default ResquestService