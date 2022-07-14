/** Import des modules nécessaires */
import axios from 'axios'
import { accountService } from './account.service'

const Axios = axios.create({
    baseURL: 'http://localhost:8080'
})

Axios.interceptors.request.use(request => {
    console.log(request)
    let token = accountService.getToken()

    if(token){
        request.headers.authorization = 'Bearer'+token
    }
    console.log(request)
    return request
} )
export default Axios