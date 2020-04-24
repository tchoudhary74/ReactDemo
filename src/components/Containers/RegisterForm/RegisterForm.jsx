import React, { Component } from 'react'
import Input from '../common/InputTextBox';
import Button from '../common/Button';
import loginImage from '../../../media/icons/login.png'
import { Api_login } from '../../../API/Api_login';
import { toast } from 'react-toastify';


class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            register: {
                email: '',
                password: ''
            }

        }
    }

    onCancel =()=>{
        this.props.history.push("/");
    }

    submitOnClick =()=>{
        let objApiRegister = new Api_login();
        const result = objApiRegister.register(this.state.register);
        result.then((response)=>{
            this.props.history.push('/grid');      
        }).catch((error)=> {
            if(error.response.status)
            toast.error(error.response.data.error)
        })
    }

    onChange =(e)=>{
        const {register} = this.state;
        register[e.currentTarget.name] = e.currentTarget.value;
       
        this.setState ({
            register
        })

    }

    render() {
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
                                        <Input type='text' id='username' className='form-control' value={this.state.register.email} onChange={this.onChange} placeholder='Enter Username' name='email'></Input>
                                        
                                    </li>
                                    <li>
                                        <Input type='password' id='password' className='form-control' value={this.state.register.password} onChange={this.onChange} placeholder='Enter Password' name='password'></Input>
                                    </li>
                                    <li>
                                        <Input type='password' id='reset-password' className='form-control' value={this.state.register.resetpassword} onChange={this.onChange} placeholder='Re-Enter Password' name='password'></Input>
                                    </li>
                                    <li className='btn-holder'>
                                        <div>
                                            <Button type='submit' id='register-btn' className='btn-purple' onClick={this.onCancel} value='Cancel'></Button>
                                        </div>
                                        <div>
                                            <Button type='submit' id='submit-btn' className='btn-purple' onClick={this.submitOnClick} value='Register'></Button>
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

export default RegisterForm