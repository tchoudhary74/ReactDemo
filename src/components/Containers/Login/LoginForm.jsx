import React, { Component } from 'react';
import Input from '../common/InputTextBox';
import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import './LoginForm.css'
import loginImage from '../../../media/icons/login.png'
import { Link } from 'react-router-dom';
import { Api_login } from '../../../API/Api_login';
import { toast } from 'react-toastify';


class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: {
                username: '',
                password: ''
            },

            error:{
                username: '',
                password:''
            },
            checkbox: false,

        }
    }

    componentDidMount(){
        if(localStorage.getItem('isChecked')){
            this.props.history.push('/grid')
        }
        

    }


    onChange = (e) => {
        const { login, error } = this.state;
        login[e.currentTarget.name] = e.currentTarget.value;
        const emailVal = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if(login[e.currentTarget.name] === '') {
            error[e.currentTarget.name] = `Please enter ${e.currentTarget.name}`
        } else if (e.currentTarget.name === 'username' &&  !emailVal.test(login

            [e.currentTarget.name])){

        }
        else {
            error[e.currentTarget.name] = ''
        }
        this.setState({
            login,
            error
        })
        localStorage.removeItem('token')

    }

    registerOnClick = (e) => {
        console.log(e);
        this.props.history.push("/registerform");
        localStorage.setItem('token', 'tharun')
        console.log(localStorage.getItem('token'))

    }

    submitOnClick = (e) => {
        let objApiLogin = new Api_login();
        const result = objApiLogin.validateUser(this.state.login);
        result.then((response) => {
            console.log(response);
            const { data }  = response;
            const { token }  = data;
            localStorage.setItem('token', token);
            localStorage.setItem('isChecked', true)
            toast.success('Login Succesfully');
            this.props.history.push('/grid')
            console.log(token)
        }).catch((error) => {
            console.log(error.response.data.error);
            if(error.response.status === 400) 
            toast.error(error.response.data.error)

        })


    }

    checkBoxOnchange = (e) => {

    }

    render() {
        const{login, error} = this.state;
        const{username,password} = login;
        const {username: eusername, password:epassword}  = error;

        return (
            <div className='app-content'>
                <div className='login-holder'>
                    <div className='login-inner'>
                        <div className="login-box">
                            <div className='login-image'>
                                <img src={loginImage}></img>
                            </div>
                        </div>
                        <div className="login-box">
                            <div className='login-form'>

                                <h4 className='header'>Login</h4>
                                <p>Welcome Back, Please login to your account</p>


                                <ul>
                                    <li>
                                        <Input type='text' id='username' className='form-control' value={username} onChange={this.onChange} placeholder='Enter Username' name='username'></Input>
                                         <span>{eusername}</span>
                                    </li>
                                    <li>
                                        <Input type='password' id='password' className='form-control' value={password} onChange={this.onChange} placeholder='Enter Password' name='password'></Input>
                                        <span>{epassword}</span>
                                    </li>
                                    <li className='btn-holder'>
                                        <div>
                                            <CheckBox type='checkbox' id='checkBox' className='check-box' onChange={this.checkBoxOnchange} checked={this.state.checkBox}></CheckBox>
                                        </div>
                                        <div>

                                            <Link to="/forgotpassword">Forgot Password</Link>
                                        </div>
                                    </li>

                                    <li className='btn-holder'>
                                        <div>
                                            <Button type='submit' id='register-btn' className='btn-purple' onClick={this.registerOnClick} value='Register'></Button>
                                        </div>
                                        <div>
                                            <Button type='submit' id='submit-btn' className='btn-purple' onClick={this.submitOnClick} value='Login'></Button>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm