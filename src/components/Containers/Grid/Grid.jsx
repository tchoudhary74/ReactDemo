import React, { Component } from 'react';
import Button from '../common/Button';
import './Grid.css'
import { toast } from 'react-toastify';

class Grid extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    onLogout=()=>{
        localStorage.clear();
        toast.success('Logout Successful');
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='table-holder'>
                <div> <Button type='button' id='logout-btn' className='btn-purple' value='logout' onClick={this.onLogout}></Button></div>
                    <table className=''>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Username</th>
                                <th>Password</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                                
                                <td >Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                            
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Password</td>
                                <td><Button type='button' id='edit-btn' className='btn-purple' value='edit' data-toggle="modal" data-target="#exampleModal"></Button></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form>
                                <div class="modal-body">
                                   
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                   
                                </div>
                                <div class="modal-footer">
                                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Reset</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default Grid