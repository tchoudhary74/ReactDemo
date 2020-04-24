import Axios from "axios";
import { API_URL } from './common'

export class Api_login {

     async validateUser(account) {
      const result = await Axios.post(`${API_URL}api/login`,{
            email:account.username,
            password:account.password
        });
        return result;
    }

    async register(account) {
        const result = await Axios.post(`${API_URL}api/register`,{
            email:account.email,
            password:account.password 
        });
        return result
    }
    
}