/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllUsers =() => {
    return Axios.get('/users')
    }

export const userService = {
    getAllUsers
}