import React, { Component } from 'react';
import Input from './InputTextBox';
import Button from './Button';
import Checkbox from './CheckBox';
import DropDown from './DropDown'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            account: {
                userName: '',
                password: '',
                email: '',
                pin: '',
            },
            DropDownData :[{text:'1',value:1},{text:'2',value:2},{text:'3',value:23}]

        }
    }

    changeHandler = (e) => {
        const { account } = this.state;
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            account
        })
    }

    onSubmit = (e) => {
        const {account} = this.state;
        const properties = Object.keys(account);
        properties.forEach(property =>{
            console.log(account[property])
            if(account[property] === ''){

            }
        })
       

    }

    render() {
        const { account } = this.state;
        const { userName, password, email, pin } = account
        return (
            <div className='form'>
                <Input
                    type='text' id='txtUserName' value={userName} onChange={this.changeHandler} placeholder='Username' name='userName'></Input>
                <Input
                    type='password' id='txtPassword' value={password} onChange={this.changeHandler} placeholder='Password' name='password'></Input>
                <Input
                    type='email' id='txtEmail' value={email} onChange={this.changeHandler} placeholder='Email' name='email'></Input>
                <Input
                    type='number' id='txtPin' value={pin} onChange={this.changeHandler} placeholder='Pin' name='pin'></Input>
                 <DropDown  value='test' id='drop-down' arrData ={this.state.DropDownData}></DropDown>
                <Button type='submit' id='submit' className='submit-btn' onClick={this.onSubmit} value='submit'></Button>

            </div>
        )
    }
}

export default UserForm