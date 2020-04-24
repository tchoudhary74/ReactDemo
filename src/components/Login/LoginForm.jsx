import React, { Component } from 'react'
import InputText from '../Containers/common/InputTextBox';
import Button from './Button';
import CheckBox from './CheckBox'
import DropDown from './DropDown';
import TableComp from '../Containers/common/TableComponent'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            account: {
                userName: '',
                password: '',
                email: '',
                pin: ''
            },
            error: {
                userName: '',
                password: '',
                email: '',
                pin: ''
            },
            checkBox: false,
            headers: ['Username', 'password', 'email Id', 'Pin', 'Delete'],
            userDetails: []
        }
        this.GetData = this.GetData.bind(this);
        this.apiCall = this.apiCall.bind(this);
        this.deleteData = this.deleteData.bind(this);

    }

    changeHandler = (e) => {
       
        const { account, error } = this.state;
        account[e.currentTarget.name] = e.currentTarget.value;
        const emailVal = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
        const number = /[0-9]*$/
        if (account[e.currentTarget.name] === '') {
            error[e.currentTarget.name] = `please enter ${e.currentTarget.name}`
        } else if (e.currentTarget.name === 'userName' && account[e.currentTarget.name].length <= 5) {
            error[e.currentTarget.name] = `${e.currentTarget.name} should be atleat  5 Characters`;
        } else if (e.currentTarget.name === 'email' && !emailVal.test(account[e.currentTarget.name])) {
            error[e.currentTarget.name] = `${e.currentTarget.name} invalid email adderss`;
        } else if (e.currentTarget.name === 'pin' && !number.test(account[e.currentTarget.name])) {
            error[e.currentTarget.name] = `${e.currentTarget.name} is invaild`
        }
        else {
            error[e.currentTarget.name] = ''
        }
        console.log(account)
        this.setState({
            account,
            error
        })
    }

    checkBoxOnchange = (e) => {
        const _this = this;
        this.setState({
            checkBox: e.currentTarget.checked
        }, () => {
            _this.GetData(_this.state.account.pin)
        })

    }

    onSubmit = () => {
        const { error, account, userDetails } = this.state;
        const properties = Object.keys(account);
        properties.forEach(obj => {
            if (account[obj] === '') {
                error[obj] = `please enter ${obj}`
            }
            else {
                error[obj] = ''
            }
        })
        userDetails.push(account)
        console.log(userDetails)
        this.setState({
            error
        })


    }

    apiCall() {
        const _this  = this;
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => _this.setState({userDetails: json}))
    }

    componentDidMount() {
       this.apiCall();
    }

    deleteData(id){
        const _this = this;
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method : 'DELETE'
        }).then(response => response.json())
        .then(json => _this.apiCall())
    }

    GetData(id) {
        const _this = this;
        const { account } = { ...this.state }
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => {
            account.userName = json.body;
            account.pin = json.id
            account.email = json.title;


                _this.setState({
                    account
                })
            })
    }




    render() {
        return (

            <div className='text-box'>
                <InputText
                    type='text' id='txtUserName' value={this.state.account.userName} onChange={this.changeHandler} placeholder='Username' name='userName' >
                </InputText>
                <span>{this.state.error.userName}</span>
                <InputText type='password' id='txtPassword' value={this.state.account.password} onChange={this.changeHandler} placeholder='Password' name='password'></InputText>
                <span>{this.state.error.password}</span>
                <InputText type='email' id='email' placeholder='Email Id' value={this.state.account.email} onChange={this.changeHandler} name='email'> </InputText>
                <span>{this.state.error.email}</span>
                <InputText type='number' min="10" max="100" id='pin' placeholder='pin' value={this.state.account.pin} onChange={this.changeHandler} name='pin'></InputText>
                <span>{this.state.error.pin}</span>
                <CheckBox type='checkbox' id='checkBox' className='check-box' onChange={this.checkBoxOnchange} checked={this.state.checkBox}></CheckBox>
                <Button type='submit' id='button' className='loginSubmit' value='Submit' onClick={this.onSubmit}></Button>
                <TableComp id='table' className='user-Table' headers={this.state.headers} body={this.state.userDetails} onClick={this.GetData} onDelete= {this.deleteData}></TableComp>
            </div>


        )
    }
}

export default LoginForm