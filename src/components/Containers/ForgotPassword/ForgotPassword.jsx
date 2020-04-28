import React, { Component } from 'react';
import Input from '../common/InputTextBox';
import Button from '../common/Button';
import './ForgotPassword.css'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',

        }
    }

    onChange = (e) => {

        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })

    }

    render() {
        return (

            <div className='forgot-box'>
                <h2>Recover your password</h2>
                <p>Please enter your email address and we'll send you instructions on how to reset your password.</p>
                <Input type='text' id='email' className='form-control' value={this.state.email} onChange={this.onChange} placeholder='Enter Email' name='email'></Input>
                         
                <div className='forgot-btn'>
                    <Button type='submit' id='register-btn' className='btn-purple' onClick={this.registerOnClick} value='Cancel'></Button>
                    <Button type='submit' id='register-btn' className='btn-purple' onClick={this.registerOnClick} value='Register'></Button>
                </div>
            </div>
        )
    }
}

export default ForgotPassword