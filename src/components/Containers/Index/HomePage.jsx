import React, { Component } from 'react';
import Head from '../../Header/Index'
import { Api_user } from '../../../API/Api_user';
import { toast } from "react-toastify";

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        let objApiLogin = new Api_user();
        const result = objApiLogin.getUser();
        result
        .then(response => {
          console.log(response);
          const { data } = response;
          const { token } = data;
          console.log(data.data);
          this.setState={
              users:data.data
          }
          console.log(token);
        })
        .catch(error => {
          console.log('data',error);
          if (error.request.status === 400)
            toast.error(error.response.data.error);
        });
    
    }
    render() {
        console.log(this.state.users)
        const tableUsers = this.state.users.map(user=> <p>{user}</p>)
        console.log('2',tableUsers)
        return (
            <div>
              <Head/>
              <div className='container'>
              {tableUsers}
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
        );
    }
}

export default HomePage;