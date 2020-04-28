import Axios from "axios";
import { API_URL } from './common'

export class Api_user {

     async getUser() {
      const result = await Axios.get(`${API_URL}api/users?page=2`);
        return result;
    }
}